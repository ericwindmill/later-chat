import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeFeed from '../screens/feed/home_feed';
import PublicFeed from '../screens/feed/public_feed';
import NewPost from '../screens/new_post/new_post';
import MapScreen from '../screens/map/map';
import Notifications from '../screens/notifications/notifications';
import LogInContainer from '../screens/auth/login_container';

export const Tabs = TabNavigator({
  Home: {
    screen: HomeFeed
  },
  Discover: {
    screen: PublicFeed
  },
  NewPost: {
    screen: NewPost
  },
  MapScreen: {
    screen: MapScreen
  },
  Notifications: {
    screen: Notifications
  },
  Auth: {
    screen: LogInContainer
  }
});
