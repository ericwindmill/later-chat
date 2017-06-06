import * as APIUtil from '../util/session_api_util';
import { requestBookshelves } from './bookshelf_actions';

export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const clearSessionErrors = errors => ({
  type: CLEAR_SESSION_ERRORS,
  errors
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const login = user => dispatch => (
  APIUtil.login(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)), errors => dispatch(receiveErrors(errors.responseJSON)))
    .then(bookshelves => dispatch(requestBookshelves(bookshelves)))
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then(() => dispatch(receiveCurrentUser(null)))
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)), errors => dispatch(receiveErrors(errors.responseJSON)))
);
