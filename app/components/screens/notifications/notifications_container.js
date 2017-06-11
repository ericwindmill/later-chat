import { connect } from 'react-redux';

import NotificationsList from './notifications_list';

import { requestAllNotes, updateNote } from '../../../actions/note_actions';

const mapStateToProps = ( state ) => {
  return {
    location: state.location,
    currentUser: state.session.currentUser,
    notes: state.notes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNotes: locations => dispatch(requestAllNotes(locations)),
    updateNote: noteId => dispatch(updateNote(noteId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsList);
