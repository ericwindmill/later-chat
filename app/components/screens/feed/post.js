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
    this.toggleFollow.bind(this);
    this.following.bind(this);
  }

  following() {
    this.props.currentUser.leaders.includes(this.props.post.author.id);
  }

  toggleFollow() {
    if (this.following()) {
      this.props.requestDestroyFollow(this.props.post.author.id);
    } else {
      this.props.requestCreateFollow(this.props.post.author.id);
    }
  }

  render() {
    return (
      <View style={height: 100, width: 100,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black'}>
        <View>
          <Text>{this.props.post.author.username}</Text>
          <TouchableOpacity onPress={this.toggleFollow}>
            <Text>{this.following() ? 'UnFollow' : 'Follow'}<Text>
          </TouchableOpacity>
        <View>
      </View>
    );
  }
}
