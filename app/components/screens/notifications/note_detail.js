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

export default class NoteDetail extends Component {
  constructor(props) {
    super(props)
    this.redirectToNotifications = this.redirectToNotifications.bind(this)
  }

  redirectToNotifications() {
    this.props.navigation.goBack()
  }

  render() {
    let note = this.props.navigation.state.params.state.item;
    debugger;
    return (
      <View style={baseStyles.screen}>
        <TouchableOpacity style={[baseStyles.topNav, styles.topNav]} onPress={this.redirectToNotifications}>
          <Text>BACK</Text>
        </TouchableOpacity>
        <View style={styles.noteContent}>
            <View style={styles.noteAuthorContainer}>
              <Text style={styles.noteAuthor}>{note.author.username}:</Text>
            </View>
            <Text style={styles.noteBody}>{note.body}</Text>
            <Image style={styles.noteImage} source={{uri: `${note.image_url}`}} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topNav: {
    paddingLeft: 15,
    backgroundColor: '#DDD'
  },
  noteContent: {
    padding: 20,
    margin: 10
  },
  noteAuthorContainer: {
    borderBottomWidth: 0.4,
    borderBottomColor: '#555',
    marginBottom: 15
  },
  noteAuthor: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '100',
    paddingLeft: 15
  },
  noteBody: {
    fontFamily: 'Avenir',
    fontSize: 20,
    fontWeight: '100'
  },
  noteImage: {
    height: 400,
    width: 325,
    alignSelf: 'center'
  },

})
