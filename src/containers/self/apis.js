import { createAuthClient } from '../../configs/api';

// 通过 access_token 获取本人信息
export const getSelfInfoApi = () => {
  const optionsTmp = {
    method: 'get',
  };
  return createAuthClient()('/session', optionsTmp);
};
