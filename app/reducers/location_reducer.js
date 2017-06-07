import merge from 'lodash/merge';

import { RECEIVE_LOCATION } from '../actions/location_actions';

const LocationReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOCATION:
      return merge({}, state, action.location);
    default:
      return state;
  }
};

export default LocationReducer;
