import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput
} from 'react-native';
import baseStyles from '../styles/styles'

export default class NewPost extends Component {
  render () {
    return (
    <View style={styles.container}>
      <View style={[baseStyles.inputContainer, styles.inputContainer]}>
        <TextInput style={baseStyles.input}
          placeholder='leave a note...'
          onChangeText={(text) => this.setState({email: text})}
        />
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
