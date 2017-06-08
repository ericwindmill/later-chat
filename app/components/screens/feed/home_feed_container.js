import { connect } from 'react-redux';

import { requestAllPosts } from '../../../actions/posts_actions';
import { followedPosts } from '../../../reducers/selectors'
import Feed from './feed';

// TODO: make sure this is passing the array of followers and the posts correctly, once we set up that slice of state

const mapStateToProps = (state) => ({
  posts: followedPosts(state.posts, [1,5]),
  currentUser: state.session.currentUser,
  location: state.location
})

const mapDispatchToProps = (dispatch) => ({
  getFeed: locations => dispatch(requestAllPosts(locations))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)
