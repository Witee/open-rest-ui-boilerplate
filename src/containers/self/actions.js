import { GET_SELF_INFO_REQUEST } from './constants';

// 通过 access_token 获取本人信息
export function getSelfInfo() {
  return {
    type: GET_SELF_INFO_REQUEST,
  };
}
