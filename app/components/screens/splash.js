import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'
import baseStyles from './styles/styles'


export default class SplashScreen extends Component {
  componentDidMount () {
    console.log(this.props)
    setTimeout(() => {
      this.props.navigation.navigate('LogIn')
    }, 2000)
  }

  render () {

    return(
      <View style={baseStyles.container}>
        <Text style={baseStyles.headlines}>HELLO FROM LOADING PAGE</Text>
      </View>
    )
  }
}