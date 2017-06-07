import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

import baseStyles from '../styles/styles';

export default class HomeFeed extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.props.requestAllPosts(this.props.currentUser.locations)
  }

  render() {
    return (
      <View>
        {this.props.posts.forEach( (post, id) => <PostContainer key={id} post={post} />
        )}
      </View>
    );
  }
}
