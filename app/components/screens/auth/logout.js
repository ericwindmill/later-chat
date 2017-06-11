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
      <View style={baseStyles.container}>
        <TouchableOpacity style={baseStyles.buttonContainer}
          onPress={this.handleLogOut}
        >
          <Text style={baseStyles.buttonText}>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LogOut
