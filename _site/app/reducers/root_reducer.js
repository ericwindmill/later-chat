import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import PostsReducer from './posts_reducer';
import NotesReducer from './notes_reducer';
import LocationReducer from './location_reducer';
import CameraReducer from './camera_reducer';
import SearchUsersReducer from './search_users_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  posts: PostsReducer,
  notes: NotesReducer,
  location: LocationReducer,
  photo: CameraReducer,
  searchUsersResults: SearchUsersReducer
});

export default RootReducer;
