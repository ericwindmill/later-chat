import React, { Component } from 'react';
import baseStyles from '../styles/styles';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList,
  Image
} from 'react-native';
import {Icon} from 'react-native-elements'

export default class Notifications extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let note = this.props.note.item
    let location = this.props.location

    return (
      <View style={styles.notificationContainer}>
          <View style={styles.notifitcationContent}>
            <Text style={styles.notification}> You have a note! </Text>
            <Text style={styles.username}>from {note.author.username} at {location}</Text>
          </View>
          <View>
            {note.read_status ? null : <Icon name='ios-alert' size={20} type={'ionicon'} />}
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notificationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: 350,
    borderTopWidth: 1,
    borderColor: '#AAA',
    paddingVertical: 20
  },
  notifitcationContent: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingHorizontal: 10
  },
  username: {
    fontFamily: 'Avenir',
    fontSize: 16,
  },
  notification: {
    fontSize: 20,
    fontFamily: 'Avenir',
  }
})
