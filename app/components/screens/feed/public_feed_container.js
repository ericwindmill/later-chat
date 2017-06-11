import { connect } from 'react-redux';
import { requestAllPosts } from '../../../actions/posts_actions';
import { requestSearch, clearSearchResults } from '../../../actions/search_users_actions';
import { selectSearchResults } from '../../../reducers/selectors';
import { requestFollow, requestUnfollow } from '../../../actions/follows_actions';
import PublicFeed from './public_feed';

const mapStateToProps = (state) => ({
  publicPosts: state.posts,
  currentUser: state.session.currentUser,
  searchResults: selectSearchResults(state),
  location: state.location
});

const mapDispatchToProps = (dispatch) => ({
  getFeed: locations => dispatch(requestAllPosts(locations)),
  requestSearch: searchStr => dispatch(requestSearch(searchStr)),
  clearResults: () => dispatch(clearSearchResults()),
  follow: follow => dispatch(requestFollow(follow)),
  unfollow: follow => dispatch(requestUnfollow(follow)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicFeed);
