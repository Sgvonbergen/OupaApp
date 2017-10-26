import React, { Component } from 'react';
import { StyleSheet, Text, PermissionsAndroid, Button, View, Image } from 'react-native';
import WeightDisplay from '../Components/WeightDisplay';

export default class ProductScreen extends Component {
  static navigationOptions = {
    title: 'Productos'
  };
  constructor(props) {
    super(props);
    this.state = {
      maxWeight: 0,
      weight: 0,
      style: {
        color: "green",
      },
      percentage: 100,
    };
    this.fetchWeight = this.fetchWeight.bind(this, this.state);
    this.setMaxWeight = this.setMaxWeight.bind(this, this.state);
    this.calculatePercentage = this.calculatePercentage.bind(this, this.state);
    setInterval(() => {
      this.fetchWeight();
    }, 5000);
  }

  async fetchWeight() {
    console.log('fetching from server');
    const response = await fetch('http://192.168.122.1:3000/');
    console.log(response);
    const weightData = await response.json();
    const w = weightData.body.weight;
    const p = this.calculatePercentage(w);
    let color;
    if (p > 60) {
      color = "green";
    } else if (p > 15) {
      color = "yellow";
    } else {
      color = "red";
    }
    this.setState({ style: { color }, weight: w, percentage: p })
  }

  calculatePercentage(weight) {
    return 100 * (weight / this.state.maxWeight);
  }

  setMaxWeight() {
    this.setState({ maxWeight: this.state.weight });
  }

  render() {
    let weight = `Peso: ${this.state.weight.toString()} kg `;
    let color = this.state.style.color;
    return (
      <View style={styles.productProfile}>
        <Text style={styles.productTitle}>Productos</Text>
        <Image style={styles.mainIcon} source={require("../images/Rice.jpeg")} />

        <View style={[{backgroundColor: color}, styles.container]} >
          <Text style={styles.item} >{weight}</Text>
        </View>

        <Button style={styles.button} onPress={this.fetchWeight} title="Pedir Peso" />
        <Button style={styles.button} onPress={this.setMaxWeight} title="Settear Peso Maximo" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  productProfile: {
    alignItems: "flex-start",
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
    alignItems: "center",
  },

  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  productTitle: {
    flex: 1,
    fontSize: 50,
    fontFamily: "Roboto",
  },

  mainIcon: {
    flex: 3,
    width: 200,
  },

  button: {
    flex: 1,
  },

  container: {
    height: 40,
    width: 250,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    justifyContent: "center",
    flexDirection: "row",

  },

  item: {
    fontFamily: "Roboto",
    fontSize: 25,
    color: "white",
  },
});
