import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

// Tab Screens
import HomeFeedContainer from '../screens/feed/home_feed_container';
import PublicFeed from '../screens/feed/public_feed';
import NewPost from '../screens/new_post/new_post';
import MapScreen from '../screens/map/map';
import Notifications from '../screens/notifications/notifications';

// Stack Screens
import LogIn from '../screens/auth/login';
import LogInContainer from '../screens/auth/login_container';




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
  AddPost: {
    screen: NewPost
  },
  MapScreen: {
    screen: MapScreen
  },
  Notifications: {
    screen: Notifications
  }
});

export const AuthNav = StackNavigator({
  LogIn: {
    screen: LogInContainer,
  },
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      headerLeft: null
    }
  }
});
