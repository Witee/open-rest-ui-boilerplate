import { notification } from 'antd';
import { call, put, fork, takeLatest } from 'redux-saga/effects';
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCESS,
  LOGOUT_FAILD,
} from './constants';

import { logoutApi } from './apis';

function* logout() {
  nprogress.start();
  try {
    yield call(logoutApi);
    yield put({ type: LOGOUT_SUCESS });

    // 清除本地信息并打开登录页面
    localStorage.clear();
    window.location.href = '/?#/login';
  } catch (error) {
    notification.error({ message: '退出登录出错', description: '请联系管理员。' });
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: LOGOUT_FAILD, payload: response });
  }
  nprogress.done();
}

function* userLogout() {
  yield fork(logout);
}

// 监听 type 为 LOGOUT_REQUEST 的 action
export function* watchLogoutRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(LOGOUT_REQUEST, userLogout);
}
