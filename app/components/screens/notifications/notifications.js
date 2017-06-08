import React, { Component } from 'react';
import baseStyles from '../styles/styles'
import {
  StyleSheet,
  Text,
  View,
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
  }

  render() {
    console.log(this.props.location);
    return (
      <View>
        <Text>
          Notifications
        </Text>
        <View>
          <TextInput
            style={baseStyles.input}
            placeholder='Search Users'
            onChangeText={(text) => this.setState({searchStr: text})}
          />
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
