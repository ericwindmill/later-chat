import * as APIUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const recievePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestAllPosts = locations => dispatch => {
  return (
    APIUtil.fetchAllPosts(locations)
      .then(posts => dispatch(recievePosts(posts)))
  )
}
