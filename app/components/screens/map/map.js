import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

// # Coit Tower, 37.802374,-122.4080011
// # Trick Dog, 37.7592213,-122.4133992
// # Ferry Building Marketplace, 37.795274,-122.3956043
// # Golden Gate Bridge, 37.8199286,-122.4804384
// # Sutro Baths, 37.7804369,-122.5158768
// # Alcatraz Island, 37.8269775,-122.4251388
// # Mission Dolores Park, 37.7596168,-122.4290871

export default class MapScreen extends Component {
  render() {
    return (
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.7576793,
          longitude: -122.4476403,
          latitudeDelta: 0.1752,
          longitudeDelta: 0.08,
        }}
        showsUserLocation={true}
        >
        <MapView.Marker
          coordinate={{ latitude: 37.759782, longitude: -122.427093 }}
          title={'Dolores Park'}
          description={'Locals of all ages gather at this outdoor hot spot for picnics & people-watching.'}
        />
        <MapView.Marker
          coordinate={{ latitude: 37.761356, longitude: -122.425806 }}
          title={'Dolores Park Cafe'}
          description={'Casual cafe serving organic food & drinks with a spacious deck across from Dolores Park.'}
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
