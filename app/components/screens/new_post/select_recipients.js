import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';
import baseStyles from '../styles/styles'

export default class SelectRecipients extends Component {
  
  render () {
    return (
      <View> 
        <Text>
            HELLO FROM SELECT RECIPIENTS
        </Text>
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
