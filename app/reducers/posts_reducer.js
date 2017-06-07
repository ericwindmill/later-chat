import merge from 'lodash/merge';

import {
  RECEIVE_POSTS,
  RECEIVE_ERRORS
} from '../actions/posts_actions';

const initState = Object.freeze({
  posts: {},
  errors: []
});

const PostsReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, initState, action.posts);
    case RECEIVE_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  }
};

export default PostsReducer;
