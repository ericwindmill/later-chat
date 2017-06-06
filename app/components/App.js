import React, { Component } from 'react';
import configureStore from '../store/store';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tabs } from './config/router';
import { Provider } from 'react-redux';

export default class App extends Component {

  render() {
    const store = configureStore();
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}
