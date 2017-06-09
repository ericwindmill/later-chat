import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
  View
} from 'react-native';
import LocationFeed from './location_feed'

import baseStyles from '../styles/styles';


export default class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //TODO: replace this array with nearbyLocations slice of state
    this.props.getFeed(this.props.location.places_nearby);
    // this.props.getFeed(["Mission Dolores Park", "Cafe"]);
  }

  render() {
    console.log(this.props.posts);
    return (
      <ScrollView
        horizontal={true}
        pagingEnabled={true}>
        {Object.keys(this.props.posts).map((location, id) => <LocationFeed
          key={id}
          location={location}
          posts={this.props.posts[location]}/>)}
      </ScrollView>
    );
  };
}
