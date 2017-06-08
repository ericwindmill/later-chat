import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImagePickerIOS
} from 'react-native';
import baseStyles from '../styles/styles'

export default class NewPost extends Component {
  constructor () {
    super()

    this.state = {
      body: '',
      image_url: null
    }

    this.selectRecipients = this.selectRecipients.bind(this)
    this.testAPI = this.testAPI.bind(this)
  }

  testAPI () {
    console.log('state:', this.state)
    console.log('props:', this.props)
    this.props.createPost({
      body: this.state.body,
      location: this.props.location[0],
      image_url: ' ',
      author_id: this.props.currentUser.id,
      public: false
    })
  }

  selectRecipients () {
    this.props.navigation.navigate('SelectRecipients')
  }

  pickImage () {
    ImagePickerIOS.openSelectDialog({}, imgUri => {
      this.setState({image_url: imgUri })
    }, error => console.error(error))
  }

  render () {
    console.log(ImagePickerIOS)
    return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'>
      <TouchableOpacity onPress={this.pickImage}><Text>TOUCH ME FOR CAMERA</Text></TouchableOpacity>
      <TouchableOpacity onPress={this.testAPI}><Text>COME ON COME ON COME ON NOW TOUCH ME, BABY</Text></TouchableOpacity>
      <View style={[baseStyles.inputContainer, styles.inputContainer]}>
          <TextInput style={baseStyles.input}
            placeholder='leave a note ...'
            onChangeText={(text) => this.setState({body: text})}
            onBlur={this.selectRecipients}
          />
      </View>
      <Image source={{uri: this.state.image}} />
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
