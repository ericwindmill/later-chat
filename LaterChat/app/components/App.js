import React, { Component } from 'react';
import configureStore from '../store/store';
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
