import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  Dimensions,
  View,
  FlatList
} from 'react-native';
import PostContainer from './post_container';


import baseStyles from '../styles/styles';


export default class PublicFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeed(this.props.location.places_nearby);
  }

  render() {
    let closest = this.props.location.places_nearby[0]
    return (
      <View style={baseStyles.screen} >
        <View>
          <Text style={baseStyles.headlineTwo}>What's happening now at</Text>
          <Text style={baseStyles.headlines}>{this.props.location.places_nearby[0]}</Text>

          <FlatList
            data={this.props.publicPosts[closest]}
            renderItem={({ item }) => (
              <PostContainer post={item} />
            )}
            keyExtractor={item => item.id} 
            removeClippedSubviews={false}
             />

        </View>       
      </View>
    );
  }
}
