import { connect } from 'react-redux';

import { requestAllPosts } from '../../../actions/posts_actions';
import Feed from './feed';

const mapStateToProps = (state) => ({
  posts: state.posts,
  currentUser: state.session.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  requestAllPosts: locations => dispatch(requestAllPosts(locations))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)
