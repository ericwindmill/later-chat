import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

// Tab Screens
import HomeFeed from '../screens/feed/home_feed';
import PublicFeed from '../screens/feed/public_feed';
import NewPost from '../screens/new_post/new_post';
import MapScreen from '../screens/map/map';
import LogOutContainer from '../screens/auth/logout_container';
// Stack Screens
import LogIn from '../screens/auth/login';
import SignUp from '../screens/auth/signup';
import SelectRecipients from '../screens/new_post/select_recipients';
import LogInContainer from '../screens/auth/login_container';
import SplashScreenContainer from '../screens/auth/splash_container';
import NotificationsContainer from '../screens/notifications/notifications_container';

export const newPostNav = StackNavigator({
  'Add Post': {
    screen: NewPost
  },
  SelectRecipients: {
    screen: SelectRecipients
  }
})


export const Tabs = TabNavigator({
  Home: {
    screen: HomeFeed,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <Icon name='list' size={35} color={tintColor} />
      }
  },
  Discover: {
    screen: PublicFeed
  },
  'Add Post': {
    screen: newPostNav
  },
  MapScreen: {
    screen: MapScreen
  },
  Notifications: {
    screen: NotificationsContainer
  },
  LogOut: {
    screen: LogOutContainer
  }
});

export const AuthNav = StackNavigator({
  SplashScreenContainer: {
    screen: SplashScreenContainer
  },
  LogIn: {
    screen: LogInContainer
  },
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      headerLeft: null
    }
  },
  SignUp: {
    screen: SignUp
  }
});
