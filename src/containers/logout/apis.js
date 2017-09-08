import { createAuthClient } from '../../configs/api';

// 用户退出
export const logoutApi = () => {
  const optionsTmp = {
    method: 'delete',
  };
  return createAuthClient()('/session', optionsTmp);
};
