import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tabs } from './config/router';

export default class App extends Component {
  render() {
    return (
        <Tabs />
    );
  }
}
