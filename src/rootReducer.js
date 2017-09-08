import { combineReducers } from 'redux';
import selfReducer from './containers/self/reducer';
import logoutReducer from './containers/logout/reducer';

const rootReducer = combineReducers({
  selfReducer,
  logoutReducer,
});

export default rootReducer;
