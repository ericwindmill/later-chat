import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import LocationReducer from './location_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  location: LocationReducer
});

export default RootReducer;
