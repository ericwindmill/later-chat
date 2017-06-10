import * as APIUtil from '../util/notes_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const requestAllNotes = locations => dispatch => {
  console.log(APIUtil.fetchAllNotes);
  return (
    APIUtil.fetchAllNotes(locations)
    .then(posts => {
      return dispatch(receiveNotes(posts));
    })
  );
};
