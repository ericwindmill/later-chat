import merge from 'lodash/merge';

import { RECEIVE_NOTES, RECEIVE_NOTE } from '../actions/note_actions';

const NotesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, action.notes);
    case RECEIVE_NOTE:
      let nextState = merge({}, state);
      for (var i = 0; i < nextState[action.note.location].length; i++) {
        if (nextState[action.note.location][i].id === action.note.id) {
          nextState[action.note.location][i].read_status = true;
        }
      }
      return nextState;
    default:
      return state;
  }
};

export default NotesReducer;
