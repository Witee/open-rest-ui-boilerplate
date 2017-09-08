import {
  LOGIN_SUCESS,
} from './constants';

const initialState = {
  userId: null,
  userName: '',
  userRole: '',
};

const loginPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCESS:
      return Object.assign({}, state, {
        userId: action.payload.id,
        userName: action.payload.name,
        userRole: action.payload.role,
      });
    default:
      return state;
  }
};

export default loginPageReducer;
