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
import { Icon } from 'react-native-elements';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      username: 'username',
      password: 'password',
      errors: []
    };

    this.logInPressed = this.logInPressed.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  logInPressed() {
    this.props.login({ username: this.state.username,
                       password: this.state.password
          })
    .then(user => {
      if(user) {
        return this.props.navigation.navigate('Tabs');
      }
    });
  }

  redirectToSignUp() {
    this.props.navigation.navigate('SignUpContainer');
  }

  handleDemo() {
    let name = "Guest";
    let password = "password";

    for (let i = 0; i < name.length; i++) {
      setTimeout(() => this.setState({username: name.slice(0, i + 1)}), (i * 100));
    }

    for (let j = 0; j < password.length; j++) {
      setTimeout(() => this.setState({password: password.slice(0, j + 1)}), ((j + 5) * 100));
    }

    setTimeout(() => this.props.login({ username: this.state.username,
                       password: this.state.password
          })
    .then(user => {
      if(user) {
        return this.props.navigation.navigate('Tabs');
      }
    }), 1400);
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
              placeholder={this.state.username}
              onChangeText={(text) => this.setState({username: text})}
            />
          </View>
          <View style={baseStyles.inputContainer}>
            <TextInput style={baseStyles.input}
              placeholder={this.state.password}
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
          <TouchableOpacity style={baseStyles.buttonContainer}
            onPress={this.handleDemo}
          >
            <Text style={baseStyles.buttonText}>Demo Login</Text>
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
