import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

// Tab Screens
import HomeFeedContainer from '../screens/feed/home_feed_container';
import PublicFeed from '../screens/feed/public_feed';
import NewPostContainer from '../screens/new_post/new_post_container';
import MapScreen from '../screens/map/map';
import LogOutContainer from '../screens/auth/logout_container';
// Stack Screens
import LogIn from '../screens/auth/login';
import SignUpContainer from '../screens/auth/signup_container';
import SelectRecipients from '../screens/new_post/select_recipients';
import LogInContainer from '../screens/auth/login_container';
import SplashScreenContainer from '../screens/auth/splash_container';
import Cam from '../UI/camera';
import NotificationsContainer from '../screens/notifications/notifications_container';

export const newPostNav = StackNavigator({
  'Add Post': {
    screen: NewPostContainer
  },
  SelectRecipients: {
    screen: SelectRecipients
  },
  Cam: {
    screen: Cam
  }
})


export const Tabs = TabNavigator({
  Home: {
    screen: HomeFeedContainer,
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
  SignUpContainer: {
    screen: SignUpContainer
  }
});
