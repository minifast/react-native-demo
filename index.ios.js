/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ReactNativeDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {text: 'Waiting'}
  }

  componentDidMount() {
    const that = this

    fetch('http://localhost:3000/test.json').
      then((response) => {
        return response.json();
      }).
      then((json) => {
        that.stateUpdater({ text: json.text});
      }).
      catch((error) => {
        that.stateUpdater({ error: 'Error grabbing server data.' });
      });
  }

  stateUpdater(new_state, callback) {
    swizzled_callback = () => {
      if(typeof(callback) === 'function' ) { callback(); }
      if(typeof(this.props.afterSetState) === 'function' ) { this.props.afterSetState(); }
    }
    this.setState(new_state, swizzled_callback);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          <Text>{this.state.text}</Text>
        </Text>
        <Text style={styles.instructions}>
          <Text>Hello, Ministry of Velocity!</Text>
        </Text>
        <Text style={styles.instructions}>
          <Text>{this.state.error}</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
