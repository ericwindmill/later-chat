import * as APIUtil from '../util/posts_api_util';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CREATE_POST = 'CREATE_POST';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveNewPost = post => ({
  type: CREATE_POST,
  post
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const requestAllPosts = locations => dispatch => {
  return (
    APIUtil.fetchAllPosts(locations)
      .then(posts => dispatch(receivePosts(posts)))
  )
}

export const createPost = post => dispatch => {
  return (
    APIUtil.createNewPost(post)
      .then(posts => dispatch(receiveNewPost(post)))
  )
}
