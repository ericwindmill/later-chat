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

export default class NewPost extends Component {
  constructor () {
    super()

    this.selectRecipients = this.selectRecipients.bind(this)
  }

  selectRecipients () {
    console.log(this.props.navigation)
    this.props.navigation.navigate('SelectRecipients')
  }



  
  render () {
    return (
    <KeyboardAvoidingView style={styles.container}
      behavior='padding'>
      <TouchableOpacity onPress={this.selectRecipients}><Text>COME ON COME ON COME ON NOW TOUCH ME, BABY</Text></TouchableOpacity>
      <View style={[baseStyles.inputContainer, styles.inputContainer]}>
          <TextInput style={baseStyles.input}
            placeholder='leave a note ...'
            onChangeText={(text) => this.setState({email: text})}
            onBlur={this.selectRecipients}
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
