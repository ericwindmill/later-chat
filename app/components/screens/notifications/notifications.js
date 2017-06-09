import React, { Component } from 'react';
import baseStyles from '../styles/styles';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';

export default class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchStr: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.renderSearchResults = this.renderSearchResults.bind(this);
    this.toggleFollow = this.toggleFollow.bind(this);
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
        <ListView
          dataSource={source}
          renderRow={(rowData) =>
            <View>
              <Text>
                {rowData.username}
              </Text>
              <TouchableOpacity onPress={this.toggleFollow(rowData.id)}>
                <Text>Follow / Unfollow</Text>
              </TouchableOpacity>
            </View>
          }
        />
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
    // TODO: connect user's leaders array to this function and to post_container
    // return this.props.currentUser.leaders.includes(this.props.post.author.id)
    return [62].includes(id);
  }

  followButtonText() {
    if (this.following()) {
      return 'Following';
    } else {
      return 'Follow';
    }
  }

  render() {
    return (
      <View>
        <Text>
          Notifications
        </Text>
        <View>
          <TextInput
            style={baseStyles.input}
            placeholder='Search Users'
            onChangeText={(text) => this.handleSearch(text)}
          />
        </View>
        <View>
          {this.renderSearchResults()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    justifyContent: 'flex-end'
  },
  inputContainer: {

  }
});
