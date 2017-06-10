import { connect } from 'react-redux';
import { requestAllPosts } from '../../../actions/posts_actions';
import FeedIndex from './feed_index';

const mapStateToProps = (state) => ({
  public: '',
  posts: state.posts,
  currentUser: state.session.currentUser,
  location: state.location
});

const mapDispatchToProps = (dispatch) => ({
  getFeed: locations => dispatch(requestAllPosts(locations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
