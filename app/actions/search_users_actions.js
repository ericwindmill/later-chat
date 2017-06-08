import * as APIUtil from '../util/search_users_api_util';

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS";

export const requestSearch = searchStr => dispatch => {
  return APIUtil.fetchSearchUsers(searchStr).then(results => dispatch(receiveSearchResults(results)));
};

export const receiveSearchResults = searchResults => {
  return {
  type: RECEIVE_SEARCH_RESULTS,
  searchResults
};
};

export const clearSearchResults = () => ({
  type: CLEAR_SEARCH_RESULTS,
});
