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

  render() {
    return (
      <View>
        <Text>{this.props.post.author.username}</Text>
        <Text>{this.props.post.body}</Text>
      </View>
    );
  }
}
