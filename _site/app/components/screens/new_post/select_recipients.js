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
          <TouchableOpacity style={baseStyles.navLink} onPress={this.redirectToNewPost}><Text style={baseStyles.navLinkText}>BACK</Text></TouchableOpacity>
          <TouchableOpacity style={baseStyles.navLink} onPress={this.createPost}><Text style={baseStyles.navLinkText}>NEXT</Text></TouchableOpacity>
        </View>

        <View style={styles.list}> 
          <CheckBox
            style={styles.item}
            title="Post to Public"
            onPress={this.togglePublic}
            checked={this.state.public}
            checkedColor='#6534ff'
            checkedIcon='check'
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


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white'
  },
  list: {
    marginTop: 10
  },
  item: {
    margin: 10,
    height: 44,
    padding: 10,
    borderBottomWidth: 0.5
  }
})
