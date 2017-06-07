import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';

import baseStyles from '../styles/styles';
import Post from './post'

export default class LocationFeed extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <View>
        <Text>{this.props.location}</Text>
        {this.props.posts.map(post => <Post post={post}/>)}
      </View>
    )
  }
}
