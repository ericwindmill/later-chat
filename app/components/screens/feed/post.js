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
    this.toggleFollow = this.toggleFollow.bind(this);
    this.following = this.following.bind(this);
  }

  following() {
    if (this.props.currentUser.leaders[this.props.post.author.id]) {
      return true;
    } else {
      return false;
    }
  }

  followButtonText() {
    if (this.following()) {
      return 'Following';
    } else {
      return 'Follow';
    }
  }

  toggleFollow() {
    const follow = {
      follower_id: this.props.currentUser.id,
      leader_id: this.props.post.author.id
    };
    if (this.following()) {
      this.props.unfollow(follow);
    } else {
      this.props.follow(follow);
    }
  }

  render() {
    return (
      <View>
        <View>
          <Text>{this.props.post.author.username}</Text>
          <TouchableOpacity onPress={this.toggleFollow}>
            <Text>{this.followButtonText()}</Text>
          </TouchableOpacity>
        </View>
        <Text>{this.props.post.body}</Text>
      </View>
    );
  }
}
