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

// TODO: make sure this works as intended: when a follow or unfollow happens,
// the follow action hits this reducer and edit's the currentUser.leaders array

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  // defining 'nextState' to be used when pushing or removing leader_id from
  // currentUser.leaders
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
      // find the index of the leader_id and remove it from the leaders array
      delete nextState.currentUser.leaders[action.leader_id];
      // let index = nextState.currentUser.leaders[action.leader_id];
      // nextState.currentUser.leaders.splice(index, 1);
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
