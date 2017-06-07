import React from 'react'
import {
  StackNavigator
 } from 'react-navigation'
import NewPost from './new_post'
import selectRecipients from './select_recipients'

export const screens = StackNavigator({
  NewPost: {screen: NewPost},
  selectRecipients: {screen: selectRecipients}
})

selectRecipients.navigationOptions = {
  title: 'Select Recipients'
}
