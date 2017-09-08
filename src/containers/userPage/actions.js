import {
  ADD_USER_REQUEST,
  GET_USER_LIST_REQUEST,
  DEL_USER_REQUEST,
  SET_USER_ROLE_REQUEST,
  SET_USER_STATUS_REQUEST,
} from './constants';

// 添加用户
export function addUserAction(params) {
  return {
    type: ADD_USER_REQUEST,
    payload: {
      params,
    },
  };
}

// 获取用户列表
export function getUserListAction(params) {
  return {
    type: GET_USER_LIST_REQUEST,
    payload: {
      params,
    },
  };
}

// 删用户
export function delUserAction(userId) {
  return {
    type: DEL_USER_REQUEST,
    payload: {
      userId,
    },
  };
}

// 修改用户角色
export function setUserRoleAction(userId, role) {
  return {
    type: SET_USER_ROLE_REQUEST,
    payload: {
      userId,
      role,
    },
  };
}

// 修改用户状态
export function setUserStatusAction(userId, status) {
  return {
    type: SET_USER_STATUS_REQUEST,
    payload: {
      userId,
      status,
    },
  };
}
