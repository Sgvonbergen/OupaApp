import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

export default class App extends Component {
  render() {
    return <NavigationApp />
  }
}

const NavigationApp = DrawerNavigator({
  Home: { screen: HomeScreen },
  Products: { screen: ProductScreen },
  }, {
  title: 'FoodTracker',
  drawerWidth: 200,
});
