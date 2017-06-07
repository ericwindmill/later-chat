import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import baseStyles from '../styles/styles'

class LogOut extends Component {
  constructor() {
    super()

    this.handleLogOut = this.handleLogOut.bind(this)
  }

  handleLogOut() {
    this.props.removeItem('token')
    .then(res => console.log(res))
    .catch(err => console.log(err))
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
