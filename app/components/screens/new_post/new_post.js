import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import baseStyles from '../styles/styles'

export default class NewPost extends Component {
  render () {
    return (
      <View style={baseStyles.container}>
        <Text>
          New Post
        </Text>
      </View>
    );
  }
}


/*NewPost.navigationOptions = {
  tabBarIcon: {
    icon: () => (
      <Image
        source={require('../../../assets/imgs/home.png')}
      />
    )}
}*/
