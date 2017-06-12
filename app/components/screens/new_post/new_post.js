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
import { Icon } from 'react-native-elements'

export default class NewPost extends Component {
  constructor () {
    super()
    this.state = {
      body: '',
      location: '',
      image_url: null,
      author_id: '',
      public: false,
      recipients: [],
      selectRecipients: [],
      height: 25
    }
    this.selectRecipients = this.selectRecipients.bind(this)
    this.renderCamera = this.renderCamera.bind(this)
    this.pickImage = this.pickImage.bind(this)
    this.uploadImage = this.uploadImage.bind(this)
  }

  componentWillMount () {
    this.setState(
      {
        author_id: this.props.currentUser.id,
        location: this.props.location.places_nearby[0]
      }
    );
  }

  selectRecipients () {
    this.props.navigation.navigate('SelectRecipientsContainer', {state: this.state})
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

  render () {
    return (
    <View style={[baseStyles.screen, styles.screen]}
      behavior='padding'>

      <View style={[baseStyles.topNav, styles.topNav]}>
        <TouchableOpacity style={styles.link} onPress={this.selectRecipients}><Text style={styles.linkText}>NEXT</Text></TouchableOpacity>
      </View>


      <View style={[styles.container, baseStyles.container]}>


        <View style={styles.newPostContent}>
          <View style={[baseStyles.inputContainer, styles.inputContainer]}>
            <TextInput multiline={true} style={[baseStyles.input, styles.input]}
              placeholder='leave a note ...'
              multiline = {true}
              numberOfLines = {5}
              onChangeText={(text) => this.setState({body: text})}
            />
          </View>
          <Image style={styles.postImage} source={{uri: `${this.state.image_url}`}} />

          <View style={styles.cameraOptions}>
            <TouchableOpacity onPress={this.renderCamera} style={styles.cameraIcon}>
              <Icon name='ios-camera' size={40} color={'black'} type={'ionicon'}
                style={styles.icon}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.pickImage} style={styles.cameraRoll}>
              <Text>Camera Roll</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
    );
  }
}



const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F1F1F1'
  },
  container: {
    padding: 10,
  },
  topNav: {
    alignSelf: 'flex-end',
    marginTop: 10,
    paddingHorizontal: 20
  },
  link: {
    borderWidth: 0.5
  },
  linkText: {
    fontSize: 16,
    padding: 2
  },
  //Post Preview
  postImage: {
    height: 250,
    width: 250,
    alignSelf: 'center'
  },
  // New Post Content
  newPostContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  cameraOptions: {
    margin: -10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },
  cameraIcon: {
    padding: 10
  },
  cameraRoll: {
    padding: 10
  },
  inputContainer: {
    borderBottomWidth: 0.5
  },
  input: {
    fontSize: 20,
    fontFamily: 'Avenir',
    height: 100
  }
})
