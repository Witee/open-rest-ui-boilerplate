import { combineReducers } from 'redux';
import selfReducer from './containers/self/reducer';

const rootReducer = combineReducers({
  selfReducer,
});

export default rootReducer;
