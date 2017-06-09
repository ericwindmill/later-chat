import { connect } from 'react-redux';

import { requestAllPosts } from '../../../actions/posts_actions';
import Feed from './feed';

const mapStateToProps = (state) => ({
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
)(Feed);
