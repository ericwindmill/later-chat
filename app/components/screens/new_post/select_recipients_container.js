import { connect } from 'react-redux';
import SelectRecipients from './select_recipients';
import { createPost } from '../../../actions/posts_actions'

const mapStateToProps = (state) => ({
  posts: state.posts,
  currentUser: state.session.currentUser,
  photo: state.photo,
  location: state.location
})

const mapDispatchToProps = (dispatch) => ({
  createPost: post => dispatch(createPost(post))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectRecipients)
