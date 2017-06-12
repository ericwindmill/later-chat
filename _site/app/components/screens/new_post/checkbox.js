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
        this.props.toggleRecipient();
    }

    render() {
        return (
          <CheckBox 
            checkedColor='#6534ff'
            checkedIcon='check'
            style={styles.item}
            title={this.props.title}
            onPress={this.toggleCheckmark}
            checked={this.state.checked}>
          </CheckBox>
        );
    }
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    height: 44,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5
  }

})
