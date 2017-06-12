import React, {Component} from 'react'
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImagePickerIOS
} from 'react-native'
import Camera from 'react-native-camera'
import {Icon} from 'react-native-elements'
import { RNS3 } from 'react-native-aws3'


export default class CamRoll extends Component {
  constructor () {
    super()

    this.pickImage = this.pickImage.bind(this)
  }




  takePicture () {
    if (this.camera) {
      this.camera.capture()
        .then((data) => {
          const file = {
            uri: data.path,
            name: 'photo.jpg',
            type: 'image/jpeg'
          };

          const options = {
            keyPrefix: 'uploads/',
            bucket: 'later-chat',
            region: 'us-west-1',
            accessKey:  'AKIAIWDILJMSZWF6HQEA',
            secretKey: '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',
            successActionStatus: 201,
          }

          RNS3.put(file, options).then(response => {
            if (response.status !== 201) {
              throw new Error('Failed to upload image', response);
            }
              this.setState({image_url: response.body.postResponse.location})
              this.handleCapture(response.body.postResponse.location)
          })
        })
        .then(() => {
          
        })
        .catch(err => console.error(err));
    }
  }

  handleCapture (imageUrl) {
    this.props.capturePhoto(imageUrl)
    this.props.navigation.goBack()
  }












  componentDidMount () {
    this.pickImage()
  }


  render () {
    return (
      <View>
        <Text>Hey</Text>
      </View>
    )
  }
}
