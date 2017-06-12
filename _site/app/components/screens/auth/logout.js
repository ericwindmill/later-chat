import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import baseStyles from '../styles/styles'
import ASYNC from '../../../util/async_util.js';

class LogOut extends Component {
  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    ASYNC.removeItem('token')
      .then(this.props.navigation.navigate('LogIn'))
  }

  render() {
    return(
      <TouchableOpacity
        style={baseStyles.buttonContainer}
        onPress={this.handleLogOut}
      >
        <Text style={baseStyles.buttonText}>LOG OUT</Text>
      </TouchableOpacity>
    )
  }
}

export default LogOut
