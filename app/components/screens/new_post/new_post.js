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

export default class NewPost extends Component {
  render () {
    const {navigate} = this.props.navigation
    console.log(navigate)
    return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'>
      <View style={[baseStyles.inputContainer, styles.inputContainer]}>
          <TextInput style={baseStyles.input}
            placeholder='leave a note...'
            onChangeText={(text) => this.setState({email: text})}
            onPress={() => navigate('selectRecipients')}
          />
      </View>
    </KeyboardAvoidingView>
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
