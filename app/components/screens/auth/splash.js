import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import baseStyles from '../styles/styles'
import merge from 'lodash/merge'

export default class SplashScreen extends Component {
  constructor() {
    super()


  // this.handleCreateDocument = this.handleCreateDocument.bind(this)
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        var initialPosition = position;
        this.setState({initialPosition});
        this.props.receiveLocation(initialPosition);
      },
      (error) => alert(JSON.stringify(error)),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = position;
      this.setState({lastPosition});
      this.props.receiveLocation(lastPosition);
    });
    this.getToken();
  }

    async getToken() {
      try {
        let accessToken = await this.props.getItem('token');
        if(!accessToken) {
          console.log("Token not set");
          this.props.navigation.navigate('LogIn');
        } else {
          this.verifyToken(accessToken)
        }
      } catch(error) {
        console.log("Something went wrong");
      }
    }

    async verifyToken(token) {
      let accessToken = token
      try {
        let response = await fetch('https://later-chat.herokuapp.com/api/verify?session%5Baccess_token%5D='+accessToken);
        let res = await response.text();
        if (response.status >= 200 && response.status < 300) {
          //Verified token means user is logged in so we redirect him to home.
          this.props.navigation.navigate('Tabs');
        } else {
            //Handle error
            this.props.navigation.navigate('LogIn');
            let error = res;
            throw error;
        }
      } catch(error) {
          console.log("error response: " + error);
      }
    }


  // The following functions are responsible for fetching documents from S3 for camera use.
//     getInitialState() {
//       return {
//         documents: []
//       }
//     }

//     componentDidMount() {
//       FileStore.getResources() 
//       .then((data) => { this.setState({ documents: data.documents })}
//     }

//     handleCreateDocument(document) {
//       this.setState({ documents: merge([document], this.state.documents) });
//     }

  render () {

    return(
      <View style={[baseStyles.container, styles.container]}>
        <Text style={baseStyles.headlines}>WE GOT LOADING PAGES</Text>
      </View>
    )
  }
 }

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
