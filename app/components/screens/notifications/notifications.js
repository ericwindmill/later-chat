import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: 'unknown',
      lastPosition: 'unknown',
    };
  }

  componentDidMount() {
    // console.log(this.props.receiveLocation);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        this.setState({initialPosition});
        this.props.receiveLocation(initialPosition);
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = position;
      this.setState({lastPosition});
      this.props.receiveLocation(lastPosition);
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  render() {
    // console.log(this.props.location);
    return (
      <View>
        <Text>
          Notifications
        </Text>
      </View>
    );
  }
}
