import React, { Component } from 'react';
import baseStyles from '../styles/styles';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';

export default class NoteDetail extends Component {
  constructor(props) {
    super(props)
    this.redirectToNotifications = this.redirectToNotifications.bind(this)
  }

  componentDidMount() {
    this.props.navigation.state.params.updateNote(this.props.navigation.state.params.state.item.note_id);
  }

  redirectToNotifications() {
    this.props.navigation.goBack();
  }

  render() {
    console.log(this.props);
    let note = this.props.navigation.state.params.state.item;
    return (
      <View style={baseStyles.screen}>
        <TouchableOpacity style={[baseStyles.topNav, styles.topNav]} onPress={this.redirectToNotifications}>
          <Text>BACK</Text>
        </TouchableOpacity>
        <ScrollView style={styles.noteContent}>
            <View style={styles.noteAuthorContainer}>
              <Text style={styles.noteAuthor}>{note.author.username}:</Text>
            </View>
            <Text style={styles.noteBody}>{note.body}</Text>
              <Image
                source={{ uri: `${note.image_url}` }}
                indicator={Progress.Bar}
                indicatorProps={{
                  color: '#00bfb2',
                  borderWidth: 0,
                  unfilledColor: 'rgba(200, 200, 200, 0.6)'
                }}
                style={styles.noteImage}/>
            </ScrollView>
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
    height: 360,
    width: 480,
    alignSelf: 'center'
  },
})
