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
    this.toggleFollow = this.toggleFollow.bind(this)
  }

  following() {
    // TODO: connect user's leaders array to this function and to post_container
    // return this.props.currentUser.leaders.includes(this.props.post.author.id)
    return [1,5].includes(this.props.post.author.id)
  }

  followButtonText() {
    if (this.following()) {
      return 'Following'
    } else {
      return 'Follow'
    }
  }

  toggleFollow() {
    const follow = {
      follower_id: this.props.currentUser.id,
      leader_id: this.props.post.author.id
    }
    if (this.following()) {
      this.props.requestUnfollow(follow)
    } else {
      this.props.requestFollow(follow)
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
