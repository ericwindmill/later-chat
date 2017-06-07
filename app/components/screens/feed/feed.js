import React, { Component } from 'react';
import { fetchAllPosts } from '../../../util/posts_api_util'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import baseStyles from '../styles/styles';

export default class HomeFeed extends Component {
  constructor() {
    super();

    this.makeRequest = this.makeRequest.bind(this);
  }

  makeRequest() {
    this.props.requestAllPosts(["Dolores Park", "Cafe"])
  }

  render() {
    window.fetchAllPosts = fetchAllPosts
    return (
      <View>
        <TouchableOpacity style={baseStyles.buttonContainer}
          onPress={this.makeRequest}>
          <Text>send request</Text>
        </TouchableOpacity>
        <Text>
          feed
        </Text>
      </View>
    );
  }
}
