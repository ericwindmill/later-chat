import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
 } from 'react-native'
import baseStyles from '../styles/styles'
import { login } from '../../../util/session_api_util';

class LogIn extends Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: ''
    }

    this.LogInPressed = this.LogInPressed.bind(this)
  }

  async LogInPressed () {
    login({ username: this.state.email, password: this.state.password });
  }

  render () {
    return (
      <View style={styles.container}>
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
    flex: 1,
    padding: 60
  },
  loginButton: {
    marginBottom: 70
  }
})
