import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import baseStyles from '../styles/styles'

class LogIn extends Component {
  constructor () {
    super()
  }

  render () {
    return(
      <View style={[baseStyles.container, styles.container]}>
        <Text> Hello from AUTH</Text>
        <TextInput style={baseStyles.input}></TextInput>
        <TextInput style={baseStyles.input}></TextInput>
        <TouchableOpacity style={baseStyles.button}>
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60
  }
})
