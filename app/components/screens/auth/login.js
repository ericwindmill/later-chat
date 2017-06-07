import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import baseStyles from '../styles/styles';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      errors: []
    };

    this.logInPressed = this.logInPressed.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
    this.redirectToHome = this.redirectToHome.bind(this);
  }

  logInPressed() {
    this.props.login({ username: this.state.username,
                       password: this.state.password
          })
    .then(user => this.props.navigation.navigate('Tabs'))
  }

  redirectToSignUp() {
    this.props.navigation.navigate('SignUpContainer');
  }

  redirectToHome() {
    this.props.navigation.navigate('Tabs');
  }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <View>
            {this.state.errors.map((error, i) => (
              <Text key={i}>{error}</Text>
            ))}
          </View>
          <Text>{this.state.errors}</Text>
          <View style={baseStyles.inputContainer}>
            
            <TextInput style={baseStyles.input}
              placeholder='username'
              onChangeText={(text) => this.setState({username: text})}
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
            onPress={this.logInPressed}
          >
            <Text style={styles.buttonText}>LogIn</Text>
          </TouchableOpacity>
          <TouchableOpacity style={baseStyles.buttonContainer}
            onPress={this.redirectToSignUp}
          >
            <Text style={baseStyles.buttonText}>Not a member? Sign Up!</Text>
          </TouchableOpacity>
          <TouchableOpacity style={baseStyles.buttonContainer}
            onPress={this.redirectToHome}
          >
            <Text style={baseStyles.buttonText}>ByPass for Dev</Text>
          </TouchableOpacity>
        </View>
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
