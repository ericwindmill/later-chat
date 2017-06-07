import React, { Component } from 'react';
import configureStore from '../store/store';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Tabs, AuthNav } from './config/router';
import  LogIn from './screens/auth/login';
import { Provider } from 'react-redux';

export default class App extends Component {

  render () {
    console.log('here')
    const store = configureStore();
    window.store = store;
    return (
      <Provider store={store}>
        <AuthNav />
      </Provider>
    );
  }
}
