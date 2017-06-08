import { values } from 'lodash';

export const selectSearchResults = ({ searchResults }) => {
  return values(searchResults) || [];
};
