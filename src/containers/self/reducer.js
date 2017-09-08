import {
  GET_SELF_INFO_SUCESS,
} from './constants';

const initialState = {
  userId: null,
  userName: '',
  userRole: '',
};

const selfReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SELF_INFO_SUCESS:
      return Object.assign({}, state, {
        userId: action.payload.id,
        userName: action.payload.name,
        userRole: action.payload.role,
      });
    default:
      return state;
  }
};

export default selfReducer;
