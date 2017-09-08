import {
  LOGOUT_SUCESS,
} from './constants';

const initialState = {
  userId: null,
  userName: '',
  userRole: '',
};

// 用户退出后恢复默认值
const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT_SUCESS:
      return state;
    default:
      return state;
  }
};

export default logoutReducer;
