import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: {
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })
      },
    });

    // NOTE: The following are for having tabs at the bottom on Android.
    //   Any of them doesn't work as expected.
    //   See more the QA at 89. Styling the NavBar and https://github.com/react-navigation/react-navigation-tabs
    //
    // const MainNavigator = TabNavigator({
    //   welcome: { screen: WelcomeScreen },
    //   auth: { screen: AuthScreen },
    //   main: {
    //     screen: TabNavigator({
    //       map: { screen: MapScreen },
    //       deck: { screen: DeckScreen },
    //       review: {
    //         screen: StackNavigator({
    //           review: { screen: ReviewScreen },
    //           settings: { screen: SettingsScreen }
    //         })
    //       }
    //     }, {
    //       // NOTE: This is for Android.
    //       tabBarPosition: 'bottom',
    //       lazy: true // NOTE: Each screen will not mount/load until user clicks on them
    //     })
    //   }
    // }, {
    //   // NOTE: This is for Android.
    //   tabBarPosition: 'bottom',
    //   lazy: true // NOTE: Each screen will not mount/load until user clicks on them
    // });

    // const MainNavigator = TabNavigator({
    //   welcome: { screen: WelcomeScreen },
    //   auth: { screen: AuthScreen },
    //   main: {
    //     screen: TabNavigator({
    //       map: { screen: MapScreen },
    //       deck: { screen: DeckScreen },
    //       review: {
    //         screen: StackNavigator({
    //           review: { screen: ReviewScreen },
    //           settings: { screen: SettingsScreen }
    //         }, {
    //           // NOTE: This is for Android.
    //           tabBarPosition: 'bottom',
    //           lazy: true // NOTE: Each screen will not mount/load until user clicks on them
    //         })
    //       }
    //     }, {
    //       // NOTE: This is for Android.
    //       tabBarPosition: 'bottom',
    //       lazy: true // NOTE: Each screen will not mount/load until user clicks on them
    //     })
    //   },
    // });

    // Map, DECK, REVIEW JOBS SHOW at bottom
    // const MainNavigator = TabNavigator({
    //   welcome: { screen: WelcomeScreen },
    //   auth: { screen: AuthScreen },
    //   main: {
    //     screen: TabNavigator({
    //       map: { screen: MapScreen },
    //       deck: { screen: DeckScreen },
    //       review: {
    //         screen: StackNavigator({
    //           review: { screen: ReviewScreen },
    //           settings: { screen: SettingsScreen }
    //         })
    //       }
    //     }, {
    //       // NOTE: This is for Android.
    //       tabBarPosition: 'bottom',
    //       lazy: true // NOTE: Each screen will not mount/load until user clicks on them
    //     })
    //   },
    // });

    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // NOTE: Delete this line at `83. Implementing the First Navigator` to show the content.
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
