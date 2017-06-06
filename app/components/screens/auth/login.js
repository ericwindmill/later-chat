import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import fallbackStyles from '../styles/styles'

class LogIn extends Component {
  constructor () {
    super()
  }

  render () {
    return(
      <View style={styles.container}>
        <Text> Hello from AUTH</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
