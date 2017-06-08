import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import LocationReducer from './location_reducer';
import SearchUsersReducer from './search_users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  location: LocationReducer,
  searchUsersResults: SearchUsersReducer 
});

export default RootReducer;
