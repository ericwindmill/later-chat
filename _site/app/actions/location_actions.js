export const RECEIVE_LOCATION = 'RECEIVE_LOCATION';
export const RECEIVE_GOOGLE_PLACES = 'RECEIVE_GOOGLE_PLACES';

export const receiveLocation = location => ({
  type: RECEIVE_LOCATION,
  location
});

export const receiveGooglePlaces = googlePlaces => ({
  type: RECEIVE_GOOGLE_PLACES,
  googlePlaces
});
