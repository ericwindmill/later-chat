import React from 'react';
import { Image, StyleSheet } from 'react-native'
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'

// Tab Screens
import HomeFeedContainer from '../screens/feed/home_feed_container';
import PublicFeedContainer from '../screens/feed/public_feed_container';
import NewPostContainer from '../screens/new_post/new_post_container';
import MapScreen from '../screens/map/map';
import LogOutContainer from '../screens/auth/logout_container';
// Stack Screens
import LogIn from '../screens/auth/login';
import SignUpContainer from '../screens/auth/signup_container';
import SelectRecipientsContainer from '../screens/new_post/select_recipients_container';
import LogInContainer from '../screens/auth/login_container';
import SplashScreenContainer from '../screens/auth/splash_container';
import CamContainer from '../UI/camera_container';
import CamRollContainer from '../UI/camera_roll_container';
import NotificationsContainer from '../screens/notifications/notifications_container';
import NoteDetail from '../screens/notifications/note_detail';

export const newPostNav = StackNavigator({
  'Add Post': {
    screen: NewPostContainer
  },
  SelectRecipientsContainer: {
    screen: SelectRecipientsContainer
  },
  Cam: {
    screen: CamContainer
  },
  CamRoll: {
    screen: CamRollContainer
  }
},
  { headerMode: 'none' }
)

export const NoteNav = StackNavigator({
  NotificationsContainer: {
    screen: NotificationsContainer
  },
  NoteDetail: {
    screen: NoteDetail
  }
},
  {headerMode: 'none'}
);

export const Tabs = TabNavigator({
  Home: {
    screen: HomeFeedContainer,
    navigationOptions: {
      tabBarIcon: () => <Icon name='ios-planet-outline' size={30} type={'ionicon'} />
    }
  },
  Discover: {
    screen: PublicFeedContainer,
    navigationOptions: {
      tabBarIcon: () => <Icon name='ios-search-outline' size={30} type={'ionicon'} />
    }
  },
  'Add Post': {
    screen: newPostNav,
    navigationOptions: {
      tabBarIcon: () => <Icon name='ios-add-circle-outline' size={30} type={'ionicon'} />
    }
  },
  Me: {
    screen: NoteNav,
    navigationOptions: {
      tabBarIcon: () => <Icon name='md-person' size={30} type={'ionicon'} />
    }
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
},
{ headerMode: 'none' }
);


