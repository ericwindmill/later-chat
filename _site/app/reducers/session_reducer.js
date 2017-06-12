import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import {
  RECEIVE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follows_actions';

const nullUser = Object.freeze({
  currentUser: null,
  errors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_FOLLOW:
      nextState.currentUser.leaders[action.leader_id.id] = action.leader_id;
      return nextState;
    case REMOVE_FOLLOW:
      delete nextState.currentUser.leaders[action.leader_id];
      return nextState;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, nullUser, {
        errors
      });
    default:
      return state;
  }
};

export default SessionReducer;
