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


export default class HomeFeed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getFeed(this.props.location.places_nearby);
  }

  render() {
    let closest = this.props.location.places_nearby[0];
    let nearbyPosts = this.props.posts[closest];
    if (nearbyPosts) { nearbyPosts = nearbyPosts.reverse(); }
    return (
      <View style={[baseStyles.screen, styles.container]} >
        <View>
          <Text style={baseStyles.headlines}>{this.props.location.places_nearby[0]}</Text>
          <FlatList
            data={nearbyPosts}
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


const styles = StyleSheet.create({

})
