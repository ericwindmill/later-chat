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
import { RNS3 } from 'react-native-aws3'

export default class NewPost extends Component {
  constructor () {
    super()
    this.state = {
      body: '',
      image_url: null 
    }

    this.selectRecipients = this.selectRecipients.bind(this)
    this.renderCamera = this.renderCamera.bind(this)
    this.pickImage = this.pickImage.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
    this.logMe = this.logMe.bind(this)
    this.logState = this.logState.bind(this)
  }

  selectRecipients () {
    this.props.navigation.navigate('SelectRecipients')
  }

  pickImage () {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.uploadImage(imageUri)
    }, error => console.error(error))
  }

  uploadImage (imageUri) {
    const file = {
      uri: imageUri,
      name: `photo${Math.floor((Math.random() * 10) + 1)}.jpg`,
      type: 'image/jpeg'
    }
    const options = {
      keyPrefix: 'uploads/',
      bucket: 'later-chat',
      region: 'us-west-1',
      accessKey:  'AKIAIWDILJMSZWF6HQEA',
      secretKey: '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',
      successActionStatus: 201
    }
    RNS3.put(file, options).then(response => {
      if (response.status !== 201) {
        throw new Error('Failed to upload image', response);
      }
        this.setState({image_url: response.body.postResponse.location})
    })
  }

  renderCamera () {
    this.props.navigation.navigate('Cam')
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.photo.url !== prevProps.photo.url) {
      this.state.image_url = this.props.photo.url
    }
  }

  logMe() {
    console.log(this.props)
  }

  logState() {
    console.log(this.state)
  }

  render () {
    return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'>

      <TouchableOpacity onPress={this.logState}><Text>TOUCH ME TO LOG State</Text></TouchableOpacity>
      <TouchableOpacity onPress={this.logMe}><Text>TOUCH ME TO LOG PROPS</Text></TouchableOpacity>
      <TouchableOpacity onPress={this.renderCamera}><Text>TOUCH ME FOR CAMERA</Text></TouchableOpacity>
      <TouchableOpacity onPress={this.pickImage}><Text>TOUCH ME FOR CAMERA ROLL</Text></TouchableOpacity>


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
