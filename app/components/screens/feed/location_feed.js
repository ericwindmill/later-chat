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
import Post from './post'

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
            <Post post={item} />
          )}
          keyExtractor={item => item.id}/>
      </View>
    )
  }
}
