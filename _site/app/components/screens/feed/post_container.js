import { connect } from 'react-redux';
import { requestFollow, requestUnfollow } from '../../../actions/follows_actions';
import Post from './post';

const mapStateToProps = (state, ownProps )=> ({
  post: ownProps.post,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  follow: follow => dispatch(requestFollow(follow)),
  unfollow: follow => dispatch(requestUnfollow(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
