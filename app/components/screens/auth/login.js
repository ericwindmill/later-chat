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
      password: ''
    };

    this.logInPressed = this.logInPressed.bind(this);
    this.redirectToSignUp = this.redirectToSignUp.bind(this);
  }

  componentWillMount() {
    this.getToken();
  }

  async getToken() {
    try {
      let accessToken = await this.props.getItem('token');
      if(!accessToken) {
        console.log("Token not set");
      } else {
        this.verifyToken(accessToken)
      }
    } catch(error) {
      console.log("Something went wrong");
    }
  }

  async verifyToken(token) {
    let accessToken = token
    try {
      let response = await fetch('https://later-chat.herokuapp.com/api/verify?session%5Baccess_token%5D='+accessToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect him to home.
        this.props.navigation.navigate('Tabs');
      } else {
          //Handle error
          let error = res;
          throw error;
      }
    } catch(error) {
        console.log("error response: " + error);
    }
  }

  logInPressed() {
    this.props.login({ username: this.state.username,
                       password: this.state.password
          })
    .then(user => this.props.navigation.navigate('Tabs'));
  }

  redirectToSignUp() {
    this.props.navigation.navigate('SignUp');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputsContainer}>
          <View style={baseStyles.inputContainer}>
            <TextInput style={baseStyles.input}
              placeholder='email'
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
