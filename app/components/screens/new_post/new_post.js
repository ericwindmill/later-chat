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
import Cam from '../../UI/camera';


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
    this.logMe = this.logMe.bind(this)
  }
 
  componentDidMount () {
  }


  selectRecipients () {
    this.props.navigation.navigate('SelectRecipients')
  }

  pickImage () {
    ImagePickerIOS.openSelectDialog({}, imgUri => {
      this.setState({image_url: imgUri})
    }, error => console.error(error))
  }

  renderCamera () {
    this.props.navigation.navigate('Cam')
  }

  logMe() {
    console.log(this.props)
  }

  render () {
    return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'>

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
