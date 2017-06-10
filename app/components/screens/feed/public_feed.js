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
    console.log(this.props.publicPosts)
    return (
      <View >
        <View>
          <Text style={styles.locationHeader}>{this.props.location.places_nearby[0]}</Text>

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


const styles = StyleSheet.create({
  locationHeader: {
    fontSize: 24,
    textAlign: 'center'
  }
})
/*
      <ScrollView
        horizontal={true}
        pagingEnabled={true}>
        {Object.keys(this.props.posts).map((location, id) => <LocationFeed
          key={id}
          location={location}
          posts={this.props.posts[location]}/>)}
      </ScrollView>*/

       {/*<FlatList
          data={this.props.posts[`${this.props.locations.places_nearby[0]}]}
          renderItem={({ item }) => (
            <PostContainer post={item} />
          )}
          keyExtractor={item => item.id}/>*/}