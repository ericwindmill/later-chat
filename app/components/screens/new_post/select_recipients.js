import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity
} from 'react-native';
import baseStyles from '../styles/styles'

export default class SelectRecipients extends Component {
  constructor() {
    super()

    this.logMe = this.logMe.bind(this)
    this.logState = this.logState.bind(this)
  }


  logMe() {
    console.log(this.props)
  }
  logState() {
    console.log(this.state)
  }
  
  render () {
    return (
      <View> 
        <Text>
            HELLO FROM SELECT RECIPIENTS
        </Text>






                    <View>
                      <TouchableOpacity onPress={this.logState}><Text>TOUCH ME TO LOG State</Text></TouchableOpacity>
                      <TouchableOpacity onPress={this.logMe}><Text>TOUCH ME TO LOG PROPS</Text></TouchableOpacity>
                    </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 60,
    justifyContent: 'flex-end'
  },
  inputContainer: {
    
  }
})
