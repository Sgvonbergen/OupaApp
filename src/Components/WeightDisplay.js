import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class WeightDisplay extends Component {
  constructor(props) {
    super(props);
    let color;
    if (this.props.percentage > 60) {
      color = "green";
    } else if (this.props.percentage > 15) {
      color = "yellow";
    } else {
      color = "red";
    }
    this.state = { color, per: props.percentage, weight: props.weight };
  }
  render() {
    return (
      <View style={[{backgroundColor: this.state.color}, styles.container]} >
        <Text style={styles.item}>Peso: {this.props.weight} kg</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
})
