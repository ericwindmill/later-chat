import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';
import baseStyles from '../styles/styles';
import ProgressiveImage from 'react-native-progressive-image';

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
      <View style={styles.postContainer}>

        <View style={styles.postHeader}>
          <Text style={styles.postUsername}>{this.props.post.author.username}</Text>
          <TouchableOpacity style={baseStyles.followButton} onPress={this.toggleFollow}>
           <Text style={baseStyles.followText}>{this.followButtonText()}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.postContent}>
          <Text style={styles.postText}>{this.props.post.body}</Text>
          <Image style={styles.postImage} source={{uri: `${this.props.post.image_url}`}} />
          <Image style={styles.postImage} source={{uri: 'https://lorempixel.com/200/200'}} />
        </View>

        <ProgressiveImage
          thumbnailSource={{ uri: 'http://i.imgur.com/O249H4P.png?bust' + Math.random() }}
          imageSource={{ uri: 'http://i.imgur.com/741u15U.png?bust' + Math.random() }}
          style={{ flex: 1, alignItems: 'stretch' }}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  postContainer: {
    flex: 1,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'grey',
    padding: 12,
    alignItems: 'center'
  },
  postHeader: {
    paddingBottom: 10,
    width: 350,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  postContent: {
    flex: 1,
    width: 300
  },
  postImage: {
    height: 200,
    width: 200,
    borderWidth: 1
  },
  postText: {
    padding: 4
  },
  postUsername: {
    fontFamily: 'Avenir',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
