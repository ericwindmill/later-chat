import { connect } from 'react-redux';

import { login, signup, logout } from '../../../actions/session_actions';
import SignUp from './signup';
import ASYNC from '../../../util/async_util.js';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
