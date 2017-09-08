import {
  GET_USER_LIST_SUCESS,
} from './constants';

const initialState = {
  data: [],
  totalItems: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_SUCESS:
      return Object.assign({}, state, {
        data: action.payload.data,
        totalItems: JSON.parse(action.payload.headers['x-content-record-total']),
      });
    default:
      return state;
  }
};

export default userReducer;
