import { connect } from 'react-redux';
import { requestAllPosts } from '../../../actions/posts_actions';
import PublicFeed from './public_feed';

const mapStateToProps = (state) => ({
  public: '',
  publicPosts: state.posts,
  currentUser: state.session.currentUser,
  location: state.location
});

const mapDispatchToProps = (dispatch) => ({
  getFeed: locations => dispatch(requestAllPosts(locations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicFeed);
