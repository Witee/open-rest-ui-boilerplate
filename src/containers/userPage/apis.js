import { createAuthClient } from '../../configs/api';

// 获取用户列表
export const getUserListApi = (params = {}) => {
  const optionsTmp = {
    method: 'get',
    params: {
      ...params,
      maxResults: 10,
    },
  };
  return createAuthClient()('/users', optionsTmp);
};

// 添加用户
export const addUserApi = (params = {}) => {
  const optionsTmp = {
    method: 'post',
    data: {
      name: params.name,
      email: params.email,
      password: params.password,
    },
  };
  return createAuthClient()('/users', optionsTmp);
};

// 删除用户
export const delUserApi = (userId) => {
  const optionsTmp = {
    method: 'delete',
  };
  return createAuthClient()(`/users/${userId}`, optionsTmp);
};

// 修改用户角色
export const setUserRoleApi = (userId, role) => {
  const optionsTmp = {
    method: 'patch',
    data: {
      role,
    },
  };
  return createAuthClient()(`/users/${userId}`, optionsTmp);
};

// 修改用户状态
export const setUserStatusApi = (userId, status) => {
  const optionsTmp = {
    method: 'patch',
    data: {
      status,
    },
  };
  return createAuthClient()(`/users/${userId}`, optionsTmp);
};
