import { REGISTER_REQUEST } from './constants';

export function handleRegisterSubmit(params) {
  return {
    type: REGISTER_REQUEST,
    payload: {
      params,
    },
  };
}
