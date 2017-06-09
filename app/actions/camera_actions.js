export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export const receivePhoto = photoUrl => {
  return ({
    type: RECEIVE_PHOTO,
    photoUrl
  })
};
