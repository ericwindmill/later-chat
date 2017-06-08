export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receivePhoto = photoUrl => ({
  type: RECEIVE_PHOTO,
  photoUrl
});
