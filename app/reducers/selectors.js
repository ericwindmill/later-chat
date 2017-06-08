import { values } from 'lodash';

export const selectSearchResults = ({ searchUsersResults }) => {
  return values(searchUsersResults) || [];
};
