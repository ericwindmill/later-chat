import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
  ListView,
  Dimensions,
  TextInput,
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

  handleSearch(text) {
    this.setState({ searchStr: text }, (search) => {
      if(this.state.searchStr === "") {
        this.props.clearResults();
      } else {
        this.props.requestSearch(this.state.searchStr);
      }
    });
  }

  renderSearchResults() {
    if (this.props.searchResults.length > 0) {
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      let source = ds.cloneWithRows(this.props.searchResults);
      return (
        <View>
          <ListView
            dataSource={source}
            renderRow={(rowData) =>
              <View style={styles.resultItem}>
                <Text>
                  {rowData.username}
                </Text>
                <TouchableOpacity style={baseStyles.followButton} onPress={() => this.toggleFollow(rowData.id)}>
                  <Text>{this.followButtonText(rowData.id)}</Text>
                </TouchableOpacity>
              </View>
            }
          />
        </View>
      );
    }
  }

  toggleFollow(id) {
    const follow = {
      follower_id: this.props.currentUser.id,
      leader_id: id
    };
    if (this.following(id)) {
      this.props.unfollow(follow);
    } else {
      this.props.follow(follow);
    }
  }

  following(id) {
    if (this.props.currentUser.leaders && this.props.currentUser.leaders[id]) {
      return true;
    } else {
      return false;
    }
  }

  followButtonText(id) {
    if (this.following(id)) {
      return 'Following';
    } else {
      return 'Follow';
    }
  }


  render() {
    let closest = this.props.location.places_nearby[0];
    let nearbyPosts = this.props.publicPosts[closest];
    if (nearbyPosts) { nearbyPosts = nearbyPosts.reverse(); }
    return (
      <View style={baseStyles.screen} >
        <View style={styles.searchContainer}>
          <View>
            <View>
              <TextInput
                style={baseStyles.input}
                placeholder='Search Users'
                onChangeText={(text) => this.handleSearch(text)}
                />
            </View>
            <View style={styles.searchResults}>
              {this.renderSearchResults()}
            </View>
        </View>
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

const styles = StyleSheet.create({
  searchContainer: {
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchResults: {
    width: 200
  },
  resultItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5
  }
});
