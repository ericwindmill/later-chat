import { connect } from 'react-redux';

import { createPost } from '../../../actions/posts_actions';
import NewPost from './new_post';

const mapStateToProps = (state) => ({
  posts: state.posts,
  currentUser: state.session.currentUser,
  location: ['Delores Park', 'Cafe', 'Puzzels Fun Dome']
})

const mapDispatchToProps = (dispatch) => ({
  createPost: post => dispatch(post(post))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPost)
