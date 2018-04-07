import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ReviewScreen extends Component {
  // NOTE: class property
  static navigationOptions = {
    title: 'Review Jobs',
    // NOTE: Rewrite as follows at `87. Customization with Header Options`.
    headerRight: <Text>Right</Text>
  }

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
