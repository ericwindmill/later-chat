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
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
    this.store = configureStore();
    window.store = this.store
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        this.setState({initialPosition});
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = position;
      this.setState({lastPosition});
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  render () {
    window.store = this.store
    return (
      <Provider store={this.store}>
        <AuthNav />
      </Provider>
    );
  }
}
