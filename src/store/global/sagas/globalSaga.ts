import {all, fork, takeLatest, takeEvery} from 'redux-saga/effects'

import {login} from './loginSagas'
import {googleLogin, fbLogin} from './socialSagas'
import {GLOBAL_TYPES as TYPES} from '../types'

/** Watchers */
function* loginWatcher() {
  yield takeLatest(TYPES.GLOBAL_SIGN_IN_SAGA, login)
  yield takeEvery(TYPES.GLOBAL_FB_LOGIN_SAGA, fbLogin)
  yield takeLatest(TYPES.GLOBAL_GOOGLE_LOGIN_SAGA, googleLogin)
}

/** Sagas */
export function* globalSaga() {
  yield all([fork(loginWatcher)])
}
