import merge from 'lodash/merge';

import { RECEIVE_NOTES } from '../actions/note_actions';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, action.notes);
    default:
      return state;
  }
};

export default NotesReducer;
