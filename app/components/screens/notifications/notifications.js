import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   initialPosition: 'unknown',
    //   lastPosition: 'unknown',
    // };
    this.fetchGoogle = this.fetchGoogle.bind(this);
  }

  componentDidMount() {
    this.fetchGoogle();
  }

  async fetchGoogle() {
    let response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.760183,-122.427026&radius=500&key=AIzaSyDBH-I807okFiwNi3VqRYFuHpdOYH4DXX4');
    let res = await response.json();
    console.log(res);
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
