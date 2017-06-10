import { connect } from 'react-redux';

import Notifications from './notifications';

import { receiveLocation, receiveGooglePlaces } from '../../../actions/location_actions';
import { requestAllNotes } from '../../../actions/note_actions';

const mapStateToProps = ( state ) => {
  return {
    location: state.location,
    currentUser: state.session.currentUser,
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveLocation: location => dispatch(receiveLocation(location)),
    getNotes: locations => dispatch(requestAllNotes(locations))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
