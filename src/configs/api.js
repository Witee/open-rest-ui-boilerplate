import axios from 'axios';

// api的配置文件
export const configs = {
  version: '1.0.0',
  baseURL: '/api',
};


let authClient = null;
export function createAuthClient() {
  const accessToken = localStorage.getItem('access_token');
  if (!authClient) {
    authClient = axios.create({
      baseURL: configs.baseURL,
      timeout: 1000000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': accessToken,
      },
    });
  }
  return authClient;
}
