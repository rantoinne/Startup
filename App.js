import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import FirstScreen from './Components/FirstScreen';
import SecondScreen from './Components/SecondScreen';
import ThirdScreen from './Components/ThirdScreen';


const App = createStackNavigator({
  FirstScreen:       { screen: FirstScreen },
  SecondScreen:      { screen: SecondScreen },
  ThirdScreen:       { screen: ThirdScreen },
});

export default App;
