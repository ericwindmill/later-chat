import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  View
} from 'react-native';
import { List, ListItem } from "react-native-elements";

import baseStyles from '../styles/styles';
import PostContainer from './post_container';

export default class LocationFeed extends Component {

  render() {
    return (
      <View >
        <View>
          <Text>{this.props.location}</Text>
        </View>
        <FlatList
          data={this.props.posts}
          renderItem={({ item }) => (
            <PostContainer post={item} />
          )}
          keyExtractor={item => item.id}/>
      </View>
    );
  }
}
