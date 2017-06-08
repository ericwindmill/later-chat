import merge from 'lodash/merge';

import { RECEIVE_LOCATION, RECEIVE_GOOGLE_PLACES } from '../actions/location_actions';

const LocationReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_LOCATION:
      return merge({}, state, action.location);
    case RECEIVE_GOOGLE_PLACES:
      return merge({}, state, action.googlePlaces);
    default:
      return state;
  }
};

export default LocationReducer;
