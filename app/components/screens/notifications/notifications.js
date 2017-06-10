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
  }

  componentDidMount() {
    let data = {
      user_id: this.props.currentUser.id,
      locations: this.props.location.places_nearby
    };
    this.props.getNotes(data);
  }
  render() {
    return (
      <View>
        <Text>
          Notifications
        </Text>
      </View>
    );
  }
}
