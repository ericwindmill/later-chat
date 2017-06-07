import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import baseStyles from '../styles/styles'

export default class NewPost extends Component {
  constructor () {
    super()

    this.state = {
      body: ''
    }

    this.selectRecipients = this.selectRecipients.bind(this)
    this.testAPI = this.testAPI.bind(this)
  }

  testAPI () {
    console.log('state:', this.state)
    console.log('props:', this.props)
    this.props.createPost({
      body: this.state.body,
      location: this.props.location[0]
      image_url: ' ',
      author_id: this.props.currentUser.id,
      public: false
    })
  }

  selectRecipients () {
    this.props.navigation.navigate('SelectRecipients')
  }

  render () {
    return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'>
      <TouchableOpacity onPress={this.testAPI}><Text>COME ON COME ON COME ON NOW TOUCH ME, BABY</Text></TouchableOpacity>
      <View style={[baseStyles.inputContainer, styles.inputContainer]}>
          <TextInput style={baseStyles.input}
            placeholder='leave a note ...'
            onChangeText={(text) => this.setState({body: text})}
            onBlur={this.selectRecipients}
          />
      </View>
    </KeyboardAvoidingView>
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
})
