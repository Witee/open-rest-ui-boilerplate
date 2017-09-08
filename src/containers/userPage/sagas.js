import { call, put, fork, takeLatest } from 'redux-saga/effects';
import {
  ADD_USER_REQUEST,
  ADD_USER_SUCESS,
  ADD_USER_FAILD,
  GET_USER_LIST_REQUEST,
  GET_USER_LIST_SUCESS,
  GET_USER_LIST_FAILD,
  DEL_USER_REQUEST,
  DEL_USER_SUCESS,
  DEL_USER_FAILD,
  SET_USER_ROLE_REQUEST,
  SET_USER_ROLE_SUCESS,
  SET_USER_ROLE_FAILD,
  SET_USER_STATUS_REQUEST,
  SET_USER_STATUS_SUCESS,
  SET_USER_STATUS_FAILD,
} from './constants';

import {
  addUserApi,
  getUserListApi,
  delUserApi,
  setUserRoleApi,
  setUserStatusApi,
} from './apis';

// =============================================================================
// 获取用户列表
function* get(params) {
  nprogress.start();
  try {
    const payload = yield call(getUserListApi, params);
    yield put({ type: GET_USER_LIST_SUCESS, payload });
  } catch (error) {
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: GET_USER_LIST_FAILD, payload: response });
  }
  nprogress.done();
}

// 此处的 { payload } 为 action 中的 payload
function* getUserList({ payload }) {
  yield fork(get, payload.params);
}

// 监听 type 为 GET_USER_LIST_REQUEST 的 action
export function* watchGetUserListRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(GET_USER_LIST_REQUEST, getUserList);
}

// =============================================================================
// 添加用户
function* add(params) {
  nprogress.start();
  try {
    const payload = yield call(addUserApi, params);
    yield put({ type: ADD_USER_SUCESS, payload: payload.data });
  } catch (error) {
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: ADD_USER_FAILD, payload: response });
  }
  nprogress.done();
}

// 此处的 { payload } 为 action 中的 payload
function* addUser({ payload }) {
  yield call(add, payload.params);
  // 获取最新列表
  yield fork(get, { startIndex: 0 });
}

// 监听 type 为 ADD_USER_REQUEST 的 action
export function* watchAddUserRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(ADD_USER_REQUEST, addUser);
}

// =============================================================================
// 删除用户
function* del(userId) {
  nprogress.start();
  try {
    const payload = yield call(delUserApi, userId);
    yield put({ type: DEL_USER_SUCESS, payload: payload.data });
  } catch (error) {
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: DEL_USER_FAILD, payload: response });
  }
  nprogress.done();
}

// 此处的 { payload } 为 action 中的 payload
function* delUser({ payload }) {
  yield call(del, payload.userId);
  // 获取最新列表
  yield fork(get, { startIndex: 0 });
}

// 监听 type 为 DEL_USER_REQUEST 的 action
export function* watchDelUserRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(DEL_USER_REQUEST, delUser);
}

// =============================================================================
// 修改用户角色
function* setRole(userId, role) {
  nprogress.start();
  try {
    const payload = yield call(setUserRoleApi, userId, role);
    yield put({ type: SET_USER_ROLE_SUCESS, payload: payload.data });
  } catch (error) {
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: SET_USER_ROLE_FAILD, payload: response });
  }
  nprogress.done();
}

// 此处的 { payload } 为 action 中的 payload
function* setUserRole({ payload }) {
  yield call(setRole, payload.userId, payload.role);
  // 获取最新列表
  yield fork(get, { startIndex: 0 });
}

// 监听 type 为 SET_USER_ROLE_REQUEST 的 action
export function* watchSetUserRoleRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(SET_USER_ROLE_REQUEST, setUserRole);
}

// =============================================================================
// 修改用户状态
function* setStatus(userId, status) {
  nprogress.start();
  try {
    const payload = yield call(setUserStatusApi, userId, status);
    yield put({ type: SET_USER_STATUS_SUCESS, payload: payload.data });
  } catch (error) {
    // eslint-disable-next-line
    console.log('error: ', error);
    const { response } = error;
    yield put({ type: SET_USER_STATUS_FAILD, payload: response });
  }
  nprogress.done();
}

// 此处的 { payload } 为 action 中的 payload
function* setUserStatus({ payload }) {
  yield call(setStatus, payload.userId, payload.status);
  // 获取最新列表
  yield fork(get, { startIndex: 0 });
}

// 监听 type 为 SET_USER_STATUS_REQUEST 的 action
export function* watchSetUserStatusRequest() {
  // takeLatest 默认会把 action 做为第3个参数，所以这里不需要显式的传递参数
  yield takeLatest(SET_USER_STATUS_REQUEST, setUserStatus);
}
