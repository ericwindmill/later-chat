import { connect } from 'react-redux';

import Notifications from './notifications';

import { receiveLocation, receiveGooglePlaces } from '../../../actions/location_actions';
import { requestSearch, clearSearchResults } from '../../../actions/search_users_actions';
import { selectSearchResults } from '../../../reducers/selectors';
import { requestFollow, requestUnfollow } from '../../../actions/follows_actions';

const mapStateToProps = ( state ) => {
  return {
    location: state.location,
    searchResults: selectSearchResults(state),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveLocation: location => dispatch(receiveLocation(location)),
    requestSearch: searchStr => dispatch(requestSearch(searchStr)),
    clearResults: () => dispatch(clearSearchResults()),
    follow: follow => dispatch(requestFollow(follow)),
    unfollow: follow => dispatch(requestUnfollow(follow))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
