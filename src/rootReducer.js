import { combineReducers } from 'redux';
import selfReducer from './containers/self/reducer';
import logoutReducer from './containers/logout/reducer';
import userReducer from './containers/userPage/reducer';

const rootReducer = combineReducers({
  selfReducer,
  logoutReducer,
  userReducer,
});

export default rootReducer;
