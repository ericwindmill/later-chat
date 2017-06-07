import { connect } from 'react-redux';

import { requestAllPosts } from '../../../actions/posts_actions';
import Feed from './feed';

const mapStateToProps = ({posts, session, errors}) => ({
  posts,
  currentUser: session.currentUser,
  errors
})

const mapDispatchToProps = (dispatch) => ({
  requestAllPosts: locations => dispatch(requestAllPosts(locations))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)
