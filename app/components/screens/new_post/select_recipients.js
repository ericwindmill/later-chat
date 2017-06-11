import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import baseStyles from '../styles/styles'
import { CheckBox } from 'react-native-elements'
import MyCheckBox from './checkbox.js'

export default class SelectRecipients extends Component {
  constructor() {
    super()
    this.state = {
      body: '',
      location: '',
      image_url: null,
      author_id: '',
      public: false,
      recipients: []
    }

    this.followers = []

    this.logMe = this.logMe.bind(this)
    this.logState = this.logState.bind(this)
    this.getFollowers = this.getFollowers.bind(this)
    this.redirectToNewPost = this.redirectToNewPost.bind(this)
    this.toggleRecipient = this.toggleRecipient.bind(this)
    this.togglePublic = this.togglePublic.bind(this)
    this.createPost = this.createPost.bind(this)
  }

  // Pass the states through navigator from 'new_post'
  componentWillMount () {
    this.setState(
      {
        author_id: this.props.currentUser.id,
        location: this.props.location.places_nearby[0],
        body: this.props.navigation.state.params.state.body,
        image_url: this.props.navigation.state.params.state.image_url,
      }
    )
  }
  componentDidMount () {
    this.getFollowers()
  }
  getFollowers () {
    Object.values(this.props.currentUser.followers).forEach(follow => {
      this.followers.push(follow)
    })
  }

  redirectToNewPost () {
    this.props.navigation.goBack()
  }

  toggleRecipient = (id) => () => {
    if (this.state.recipients.indexOf(id) === -1) {
      this.setState({ recipients: [...this.state.recipients, id]})
    } else {
      this.setState({ recipients: this.state.recipients.filter(
        el => el !== id )})
    }
  }

  togglePublic() {
    if (this.state.public === false) {
      this.setState({ public: true })
    } else {
      this.setState({ public: false})
    }
  }

  createPost() {
    this.props.createPost(this.state)
  }

  render () {
    return (
      <View style={[baseStyles.container, styles.container]}>
        <View style={baseStyles.topNav}>
          <TouchableOpacity style={styles.link} onPress={this.redirectToNewPost}><Text>BACK</Text></TouchableOpacity>
          <TouchableOpacity style={styles.link} onPress={this.createPost}><Text>NEXT</Text></TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={this.logState}><Text>TOUCH ME TO LOG State</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.logMe}><Text>TOUCH ME TO LOG PROPS</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.getFollowers}><Text>Call getFollowess()</Text></TouchableOpacity>
          <TouchableOpacity onPress={this.createPost}><Text>TOUCH ME TO CREATE A POST & NOTES</Text></TouchableOpacity>
        </View>

        <CheckBox
          style={styles.item}
          title="Post to Public"
          onPress={this.togglePublic}
          checked={this.state.public}
        />

        <FlatList
          keyExtractor={(item, idx) => item.id}
          style={styles.list}
          data={this.followers}
          renderItem={({item}) =>
            <MyCheckBox
              style={styles.item}
              title={`${item.username}`}
              toggleRecipient={this.toggleRecipient(`${item.id}`)}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    justifyContent: 'flex-end'
  },

  //top nav
  topNav: {

  },
  item: {
    padding: 10,
    height: 44
  }
})
