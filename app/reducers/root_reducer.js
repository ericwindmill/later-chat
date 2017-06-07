import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import LocationReducer from './location_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  location: LocationReducer
});

export default RootReducer;
