import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
  constructor(props) {
    super(props);
    this.markers
  }
  render() {
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.77,
          longitude: -122.45,
          latitudeDelta: 0.219,
          longitudeDelta: 0.1,
        }}
        showsUserLocation={true}
        >
        <MapView.Marker
          coordinate={{ latitude: 37.802374, longitude: -122.4080011 }}
          title={'Coit Tower'}
          image={require('../../../assets/imgs/ic_email_2x.png')}
          description={'210-foot tower in the Telegraph Hill neighborhood'}
        />
        <MapView.Marker
          coordinate={{ latitude: 37.7592213, longitude: -122.4133992 }}
          title={'Trick Dog'}
          image={require('../../../assets/imgs/ic_email_2x.png')}
          description={'Trendy hangout in a converted warehouse with an array of craft cocktails & eclectic small plates'}
        />
        <MapView.Marker
          coordinate={{ latitude: 37.795274, longitude: -122.3956043}}
          title={'Ferry Building Marketplace'}
          image={require('../../../assets/imgs/ic_email_2x.png')}
          description={'Vendors sell produce, cheese, coffee, candy & prepared food in this soaring, restored 1898 space.'}
        />
        <MapView.Marker
          coordinate={{ latitude: 37.8199286, longitude: -122.4804384 }}
          title={'Golden Gate Bridge'}
          image={require('../../../assets/imgs/ic_email_2x.png')}
          description={'Famed 4,200-ft. art deco suspension bridge open to car, bike & foot traffic.'}
        />
        <MapView.Marker
          coordinate={{ latitude: 37.7804369, longitude: -122.5158768 }}
          title={'Sutro Baths'}
          image={require('../../../assets/imgs/ic_email_2x.png')}
          description={'Now in ruins, this circa 1896, expansive public bathhouse once held seven saltwater swimming pools.'}
        />
        <MapView.Marker
          coordinate={{ latitude: 37.8269775, longitude: -122.4251388 }}
          title={'Alcatraz Island'}
          image={require('../../../assets/imgs/ic_email_2x.png')}
          description={'Notorious prison & once home to Al Capone, now a museum with audio tour, accessible by ferry.'}
        />
        <MapView.Marker
          coordinate={{ latitude: 37.7596168, longitude: -122.4290871 }}
          title={'Mission Dolores Park'}
          image={require('../../../assets/imgs/ic_email_2x.png')}
          description={'Locals of all ages gather at this outdoor hot spot for picnics & people-watching.'}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flex: 1,
  }
});
