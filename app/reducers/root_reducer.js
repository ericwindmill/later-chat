import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer

});

export default RootReducer;
