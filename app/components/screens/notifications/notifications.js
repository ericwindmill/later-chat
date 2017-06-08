import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.location);
    return (
      <View>
        <Text>
          Notifications
        </Text>
      </View>
    );
  }
}
