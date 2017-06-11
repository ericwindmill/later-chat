import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
  render() {
    return (
      <MapView
        style={styles.container}
        provider={'google'}
        initialRegion={{
          latitude: 37.7596168,
          longitude: -122.4279981,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
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
