import { LOGIN_REQUEST } from './constants';

export function handleLoginSubmit(params) {
  return {
    type: LOGIN_REQUEST,
    payload: {
      params,
    },
  };
}
