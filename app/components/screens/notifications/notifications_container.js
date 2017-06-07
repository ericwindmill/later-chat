import { connect } from 'react-redux';

import Notifications from './notifications';

import { receiveLocation } from '../../../actions/location_actions';

const mapStateToProps = ( state ) => {
  return {
    location: state.location
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveLocation: location => dispatch(receiveLocation(location))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
