import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import baseStyles from '../styles/styles';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

export default class Post extends Component {
  constructor() {
    super();
    this.toggleFollow = this.toggleFollow.bind(this);
    this.following = this.following.bind(this);
  }

  following() {
    if (this.props.currentUser.leaders && this.props.currentUser.leaders[this.props.post.author.id]) {
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
            <Image
              source={{ uri: `${this.props.post.image_url}` }}
              indicator={Progress.Bar}
              indicatorProps={{
                color: '#00bfb2',
                borderWidth: 0,
                unfilledColor: 'rgba(200, 200, 200, 0.6)'
              }}
              style={styles.postImage}/>
        </View>
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
    height: 240,
    width: 320,
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
