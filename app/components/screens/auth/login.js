import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import baseStyles from '../styles/styles';
import { Icon } from 'react-native-elements'

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
  }

  logInPressed() {
    this.props.login({ username: this.state.username,
                       password: this.state.password
          })
    .then(user => this.props.navigation.navigate('Tabs'));
  }

  redirectToSignUp() {
    this.props.navigation.navigate('SignUpContainer');
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={'padding'}
        >
        <View style={styles.inputsContainer}>
          <Icon name='ios-planet' size={100} color={'black'} type={'ionicon'}
            style={styles.icon}/>
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
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity style={baseStyles.buttonContainer}
            onPress={this.redirectToSignUp}
          >
            <Text style={baseStyles.buttonText}>Not a member? Sign Up!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default LogIn;

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'flex-end',
    flex: 1,
    padding: 60,
    backgroundColor: '#04bfb2'
  },
  loginButton: {
    marginBottom: 40
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 40
  },
  buttonsContainer: {
    flex: 1,
    // justifyContent: 'space-around'
  },
  onFous: {

  }
});
