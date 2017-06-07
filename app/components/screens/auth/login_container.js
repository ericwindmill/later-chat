import { connect } from 'react-redux';

import { login, signup, logout } from '../../../actions/session_actions';
import LogIn from './login';

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
