import React from 'react';
import { Image } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeFeed from '../screens/feed/home_feed';
import PublicFeed from '../screens/feed/public_feed';
import NewPost from '../screens/new_post/new_post';
import MapScreen from '../screens/map/map';
import Notifications from '../screens/notifications/notifications';
import LogIn from '../screens/auth/login';


export const Tabs = TabNavigator({
  home: {
    screen: HomeFeed
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
  },
  Auth: {
    screen: LogIn
  }
});


NewPost.navigationOptions = {
  tabBarIcon: () => (
      <Image
        source={require('../../assets/imgs/home.png')}
      />
    )}
