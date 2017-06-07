import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer
});

export default RootReducer;
