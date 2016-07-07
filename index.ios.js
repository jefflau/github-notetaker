/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  AppRegistry
} from 'react-native';

import Router from './app/router';

class githubNotetaker extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router />
      </View>
    );
  }
}

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
