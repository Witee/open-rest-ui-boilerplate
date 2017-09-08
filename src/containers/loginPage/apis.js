import axios from 'axios';
import { configs } from '../../configs/api';

const authClient = () => (axios.create({
  baseURL: configs.baseURL,
  timeout: 1000000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
);

// 用户登录
export const loginApi = (params = {}) => {
  const optionsTmp = {
    method: 'post',
    data: {
      email: params.email,
      password: params.password,
    },
  };
  return authClient()('/session', optionsTmp);
};
