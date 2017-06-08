import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

import baseStyles from '../styles/styles';

export default class Post extends Component {
  constructor() {
    super();
  }

  follow() {
    (this.props.post.author.id)
  }

  render() {
    return (
      <View>
        <View>
          <Text>{this.props.post.author.username}</Text>
          <TouchableOpacity onPress={this.toggleFollow}>
            <Text>{this.follow()}</Text>
          </TouchableOpacity>
        </View>
        <Text>{this.props.post.body}</Text>
      </View>
    );
  }
}
