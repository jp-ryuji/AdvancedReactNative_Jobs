import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props); // NOTE: This line might not be needed. See: 105. Skipping the Auth Screen
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    );
  }
}

// NOTE: The following is destructured from `function mapStateToProps(state)`
function mapStateToProps({ auth }) {
  return { token: auth.token };
}

// NOTE: Whenever producing a new piece of states or whenever changing the state inside of redux, it automatically causes every component that is hooked up to redux to re-render with the new set of props from the mapStateToProps function.
export default connect(mapStateToProps, actions)(AuthScreen);
