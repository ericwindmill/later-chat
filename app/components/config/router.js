import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import HomeFeed from '../screens/feed/home_feed';
import PublicFeed from '../screens/feed/public_feed';
import NewPost from '../screens/new_post/new_post';
import MapScreen from '../screens/map/map';
import Notifications from '../screens/notifications/notifications';
import LogIn from '../screens/auth/login';


export const Tabs = TabNavigator({
  Home: {
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


HomeFeed.navigationOptions = {
  style: {
    backgroundColor: 'red'
  },
  tabBarIcon: () => (
      <Image
        source={require('../../assets/imgs/home.png')}
        style={styles.icon}
      />
    )
}


const styles = StyleSheet.create({
  icon: {
    height: 26,
    width: 26
  }
})
