import { connect } from 'react-redux';
import { requestAllPosts } from '../../../actions/posts_actions';
import { followedPosts } from '../../../reducers/selectors';
import HomeFeed from './home_feed';

const mapStateToProps = (state) => {
  if (state.session.currentUser.leaders) {
    let leaders = Object.keys(state.session.currentUser.leaders);
    leaders.forEach((leaderId) => leaders.push(parseInt(leaderId)));
    return {
      posts: followedPosts(state.posts, leaders),
      currentUser: state.session.currentUser,
      location: state.location
    };
  } else {
    return {
      posts: [],
      currentUser: state.session.currentUser,
      location: state.location
    };
  }
};

const mapDispatchToProps = (dispatch) => ({
  getFeed: locations => dispatch(requestAllPosts(locations))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeFeed);
