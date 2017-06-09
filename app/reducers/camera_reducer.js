import merge from 'lodash/merge';

import { RECEIVE_PHOTO } from '../actions/camera_actions';

const CameraReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_PHOTO:
      return merge({}, state, {url: action.photoUrl});
    default:
      return state;
  }
};

export default CameraReducer
