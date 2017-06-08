import { connect } from 'react-redux';

import Notifications from './notifications';

import { receiveLocation, receiveGooglePlaces } from '../../../actions/location_actions';

const mapStateToProps = ( state ) => {
  return {
    location: state.location,
    googlePlaces: state.googlePlaces
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveLocation: location => dispatch(receiveLocation(location)),
    receiveGooglePlaces: places => dispatch(receiveGooglePlaces(places))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
