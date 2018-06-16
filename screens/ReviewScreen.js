import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  // NOTE: This is a class property, that can't access props.
  // NOTE: Rewrite as follows at `87. Customization with Header Options` and `88. Programmatic Navigation`.
  //   You should check out QA on each video.
  // NOTE: Additionally, the following was rewritten for react-native-elements 1.0.0-beta5.
  static navigationOptions = ({ navigation }) => ({
    title: 'Review Jobs',
    headerRight: (
      <Button
        title='Settings'
        onPress={() => navigation.navigate('settings')}
        clear
        titleStyle={{ color: "rgba(0, 122, 255, 1)" }}
      />
    )
  });

  render() {
    return (
      <View>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
        <Text>ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
