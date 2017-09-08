import { call, put, fork, takeLatest } from 'redux-saga/effects';
import {
  REGISTER_REQUEST,
  REGISTER_SUCESS,
  REGISTER_FAILD,
} from './constants';

import { registerApi } from './apis';

// =============================================================================
// 用户注册
function* register(params) {
  nprogress.start();
  try {
    const payload = yield call(registerApi, params);
    yield put({ type: REGISTER_SUCESS, payload: payload.data });
  } catch (error) {
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: REGISTER_FAILD, payload: response });
  }
  nprogress.done();
}

// 此处的 { payload } 为 action 中的 payload
function* registerUser({ payload }) {
  yield fork(register, payload.params);
}

// 监听 type 为 REGISTER_REQUEST 的 action
export function* watchRegisterRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(REGISTER_REQUEST, registerUser);
}
