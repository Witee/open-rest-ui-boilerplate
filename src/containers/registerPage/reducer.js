import {
  REGISTER_SUCESS,
} from './constants';

const initialState = {
  userId: null,
  userName: '',
  userRole: '',
};

const registerPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCESS:
      return Object.assign({}, state, {
        userId: action.payload.id,
        userName: action.payload.name,
        userRole: action.payload.role,
      });
    default:
      return state;
  }
};

export default registerPageReducer;
