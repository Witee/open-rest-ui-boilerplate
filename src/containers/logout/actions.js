import { LOGOUT_REQUEST } from './constants';

export function userLogoutAction() {
  return {
    type: LOGOUT_REQUEST,
  };
}
