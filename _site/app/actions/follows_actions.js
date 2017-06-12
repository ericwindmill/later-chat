import * as APIUtil from '../util/follows_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = leader_id => {
  return {
  type: RECEIVE_FOLLOW,
  leader_id
};
};

export const removeFollow = leader_id => ({
  type: REMOVE_FOLLOW,
  leader_id
});

export const requestFollow = follow => dispatch => {
  return (
    APIUtil.fetchFollow(follow)
      .then(leader_id => dispatch(receiveFollow(leader_id)))
  );
};

export const requestUnfollow = follow => dispatch => {
  return (
    APIUtil.fetchUnfollow(follow)
      .then(leader_id => dispatch(removeFollow(leader_id)))
  );
};
