import merge from 'lodash/merge';

import {
  RECEIVE_POSTS,
  RECEIVE_ERRORS
} from '../actions/posts_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POSTS:
      return merge({}, state, action.posts);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, {
        errors
      });
    default:
      return state;
  }
};

export default PostsReducer;