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

    this.LogInPressed = this.LogInPressed.bind(this)

    this.state = {
      email: '',
      password: ''
    }
  }


  async LogInPressed () {

  }

  render () {
    return (
      <View style={[baseStyles.container, styles.container]}>
        <View style={styles.inputsContainer}>
          <View style={baseStyles.inputContainer}>
            <TextInput style={baseStyles.input}
              placeholder='email'
              onChangeText={(text) => this.setState({email: text})}
            />
          </View>
          <View style={baseStyles.inputContainer}>
            <TextInput style={baseStyles.input}
              placeholder='password'
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
            />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[baseStyles.buttonContainer, styles.loginButton]}
            onPress={this.LogInPressed}
          >
            <Text style={styles.buttonText}>LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={baseStyles.buttonContainer}>
            <Text style={baseStyles.buttonText}>Already a member? Sign Up!</Text>
          </TouchableOpacity>  
        </View>
        <Text>{this.state.email}</Text>
        <Text>{this.state.password}</Text>
      </View>
    )
  }
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    padding: 60
  },
  loginButton: {
    marginBottom: 70
  }
})
