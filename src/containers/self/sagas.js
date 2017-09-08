import { call, put, fork, takeLatest } from 'redux-saga/effects';
import {
  GET_SELF_INFO_REQUEST,
  GET_SELF_INFO_SUCESS,
  GET_SELF_INFO_FAILD,
} from './constants';

import { getSelfInfoApi } from './apis';

function* get() {
  nprogress.start();
  try {
    const payload = yield call(getSelfInfoApi);
    yield put({ type: GET_SELF_INFO_SUCESS, payload: payload.data });
    // 在本地存储用户信息
    localStorage.setItem('userId', payload.data.id);
    localStorage.setItem('userName', payload.data.name);
    localStorage.setItem('userRole', payload.data.role);
  } catch (error) {
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: GET_SELF_INFO_FAILD, payload: response });
  }
  nprogress.done();
}

// 此处的 { payload } 为 action 中的 payload
function* getSelfInfo() {
  yield fork(get);
}

// 监听 type 为 GET_SELF_INFO_REQUEST 的 action
export function* watchGetSelfInfoRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(GET_SELF_INFO_REQUEST, getSelfInfo);
}
