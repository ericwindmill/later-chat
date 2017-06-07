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
import {fetchAllPosts} from '../../../util/posts_api_util'

export default class NewPost extends Component {
  constructor () {
    super()

    this.selectRecipients = this.selectRecipients.bind(this)
    this.testAPI = this.testAPI.bind(this)
  }

  testAPI () {
    fetchAllPosts()
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
            onChangeText={(text) => this.setState({email: text})}
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
