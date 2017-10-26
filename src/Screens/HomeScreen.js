import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';


export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.productTitle}>Oupa App</Text>
        <Image style={styles.logo} source={require("../images/Logo.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 100,
    height: 100,
  },

  productTitle: {
    flex: 1,
    fontSize: 50,
    fontFamily: "Roboto",
  },
});
