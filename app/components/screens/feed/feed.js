import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';
import LocationFeed from './location_feed'

import baseStyles from '../styles/styles';


export default class HomeFeed extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.requestAllPosts(["Dolores Park", "Cafe"]);
  }

  render() {
    return (
      <View>
        {Object.keys(this.props.posts).map(location => <LocationFeed
                                                        location={location}
                                                        posts={this.props.posts[location]}/>)}
      </View>
    );
  };
}
