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

// 用户注册
export const registerApi = (params = {}) => {
  const optionsTmp = {
    method: 'post',
    data: {
      name: params.name,
      email: params.email,
      password: params.password,
    },
  };
  return authClient()('/users', optionsTmp);
};
