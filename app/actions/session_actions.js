import * as APIUtil from '../util/session_api_util';
import ASYNC from '../util/async_util.js';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch => {
  return (
    APIUtil.signup(user).then(userJSON => {
      ASYNC.setItem('token', userJSON.auth_token);
      let currentUser = { id: userJSON.id, username: userJSON.username };
      if (userJSON.followers) {
        currentUser.followers = userJSON.followers;
      }
      if (userJSON.leaders) {
        currentUser.leaders = userJSON.leaders;
      }
      return dispatch(receiveCurrentUser(currentUser));
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
    .then( () => ASYNC.getItem('token'))
  );
};

export const login = user => dispatch => {
  return (
    APIUtil.login(user).then(userJSON => {
      ASYNC.setItem('token', userJSON.auth_token);
      // let currentUser = { id: userJSON.id, username: userJSON.username, followers: userJSON.followers, leaders: userJSON.leaders };
      let currentUser = { id: userJSON.id, username: userJSON.username };
      if (userJSON.followers) {
        currentUser.followers = userJSON.followers;
      }
      if (userJSON.leaders) {
        currentUser.leaders = userJSON.leaders;
      }
      return dispatch(receiveCurrentUser(currentUser));
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
    .then( () => ASYNC.getItem('token'))
  );
};

export const logout = () => dispatch => {
  return (
    APIUtil.logout().then(() => (
      dispatch(receiveCurrentUser(null))
    ))
  );
};
