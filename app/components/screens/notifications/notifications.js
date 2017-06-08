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
    let lat = this.props.location.coords.latitude;
    let lng = this.props.location.coords.longitude;
    let response = await fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+lat+','+lng+'&radius=500&key=AIzaSyDBH-I807okFiwNi3VqRYFuHpdOYH4DXX4');
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
