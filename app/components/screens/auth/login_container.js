import { connect } from 'react-redux';

import { login, signup, logout } from '../../../actions/session_actions';
import LogIn from './login';
import { verify } from '../../../util/session_api_util';
import ASYNC from '../../../util/async_util.js';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    verify: verify,
    setItem: ASYNC.setItem,
    getItem: ASYNC.getItem,
    removeItem: ASYNC.removeItem
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
