import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

// NOTE: The following implmentation is based on react-navigation v2.3.0 while the udemy course is based on v1.x.x.
//   See: Q&A on https://www.udemy.com/react-native-advanced/learn/v4/t/lecture/6853588 (subject: App.js without TabNavigator)
//
// `styles` should be defined before being used in this case.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      android: {
        marginTop: Constants.statusBarHeight
      }
    })
  },
  stackHeaderStyle: {
    ...Platform.select({
      android: {
        marginTop: -Constants.statusBarHeight
      }
    })
  }
});

const ReviewNavigator = createStackNavigator(
  {
    review: ReviewScreen,
    settings: SettingsScreen
  },
  {
    navigationOptions: {
      headerStyle: styles.stackHeaderStyle
    }
  }
);

const MainNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main: createBottomTabNavigator({
    map: MapScreen,
    deck: DeckScreen,
    review: ReviewNavigator
  })
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}
