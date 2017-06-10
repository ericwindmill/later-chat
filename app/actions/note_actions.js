import * as APIUtil from '../util/notes_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const requestAllNotes = locations => dispatch => {
  return (
    APIUtil.fetchAllNotes(locations)
    .then(notes => {
      return dispatch(receiveNotes(notes));
    })
  );
};


export const updateNote = noteId => dispatch => {
  return (
    APIUtil.updateNote(noteId)
    .then(note => {
      return dispatch(receiveNote(note));
    })
  );
};
