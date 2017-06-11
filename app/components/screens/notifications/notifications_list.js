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
  FlatList
} from 'react-native';
import Notification from './notifications'
import LogOut from '../auth/logout'

export default class Notifications extends Component {
  constructor(props) {
    super(props);

    this.viewNote = this.viewNote.bind(this)
  }

  componentDidMount() {
    let data = {
      user_id: this.props.currentUser.id,
      locations: this.props.location.places_nearby
    };
    this.props.getNotes(data);
  }

  viewNote(note) {
    this.props.navigation.navigate('NoteDetail', {state: note})
  }

  render() {
    let closestLocation = this.props.location.places_nearby[0]
    let notes = this.props.notes[closestLocation]
    return (
      <View style={styles.notificationListContainer}>
        <FlatList
          data={notes}
          renderItem={(note) => (
            <TouchableOpacity onPress={() => this.viewNote(note)}>
              <Notification note={note} location={closestLocation} />
            </TouchableOpacity>
          )}
          keyExtractor={note => note.id}
          removeClippedSubviews={false}
        />

        <LogOut navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notificationListContainer: {
    marginTop: 50,
    padding: 12,
  }
})
