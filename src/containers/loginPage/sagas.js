import { notification } from 'antd';
import { call, put, fork, takeLatest } from 'redux-saga/effects';
import {
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  LOGIN_FAILD,
} from './constants';

import { loginApi } from './apis';

function* login(params) {
  nprogress.start();
  try {
    const payload = yield call(loginApi, params);
    yield put({ type: LOGIN_SUCESS, payload: payload.data });
    // 在本地存储用户信息
    localStorage.clear();
    localStorage.setItem('access_token', payload.data.auth.token);
    localStorage.setItem('expired_at', payload.data.auth.expiredAt);
    // 登录完成后打开首页
    window.location.href = '/';
  } catch (error) {
    notification.error({ message: '登录失败', description: '登录出现异常，请联系管理员。' });
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: LOGIN_FAILD, payload: response });
  }
  nprogress.done();
}

// 此处的 { payload } 为 action 中的 payload
function* userLogin({ payload }) {
  yield fork(login, payload.params);
}

// 监听 type 为 LOGIN_REQUEST 的 action
export function* watchLoginRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(LOGIN_REQUEST, userLogin);
}
