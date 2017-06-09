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
          renderRow={(rowData) => <Text>{rowData.username}</Text>}/>
      );
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
