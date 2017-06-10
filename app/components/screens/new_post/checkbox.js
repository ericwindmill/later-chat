import React, { Component } from 'react'
import {
  StyleSheet,
  View
} from 'react-native';
import { CheckBox } from 'react-native-elements'

export default class MyCheckbox extends Component {
    constructor(props) {
      super(props);
      this.state = { checked: false }
      this.toggleCheckmark = this.toggleCheckmark.bind(this)
    }

    toggleCheckmark() {
        this.setState({checked: !this.state.checked});
        this.props.addRecipient();
    }

    render() {
        return (
          <CheckBox
            title={this.props.title}
            onPress={this.toggleCheckmark}
            checked={this.state.checked}>
          </CheckBox>
        );
    }
}
