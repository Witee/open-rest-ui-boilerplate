import { all } from 'redux-saga/effects';
import { watchLoginRequest } from './containers/loginPage/sagas';
import { watchLogoutRequest } from './containers/logout/sagas';
import { watchGetSelfInfoRequest } from './containers/self/sagas';
import {
  watchGetUserListRequest,
  watchAddUserRequest,
  watchDelUserRequest,
  watchSetUserRoleRequest,
  watchSetUserStatusRequest,
} from './containers/userPage/sagas';

export default function* rootSaga() {
  yield all([
    watchLoginRequest(),
    watchLogoutRequest(),
    watchGetSelfInfoRequest(),
    watchGetUserListRequest(),
    watchAddUserRequest(),
    watchDelUserRequest(),
    watchSetUserRoleRequest(),
    watchSetUserStatusRequest(),
  ]);
}
