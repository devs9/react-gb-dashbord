import {all, fork, put, takeLatest} from 'redux-saga/effects'

import {GLOBAL_TYPES as TYPES} from './types'
import * as globalAction from './actions'

/**
 * Sagas
 */
function* login() {
  try {
    yield console.log('start')

    // const apiCall = yield call(fetchRequest, authUrls.login, {
    //   method: 'GET'
    // })
    //
    // if (apiCall.ok) {
    //   const apiData = yield apiCall.json()
    //
    //   yield put(globalAction.signInSuccess(apiData.data))
    // }
  } catch (error) {
    console.log(error)
    // yield put(globalAction.authFailure('LOGIN ERROR'))
  }
}

function* googleSignIn() {
  try {
    yield put(globalAction.authStart())
    console.log('googleSignIn start')

    const googleUser = yield gapi.auth2.getAuthInstance().signIn()

    console.log(googleUser)
  } catch (error) {
    yield put(globalAction.authFailure('LOGIN ERROR'))
  }
}

/**
 * Watchers
 */
function* loginWatcher() {
  yield takeLatest(TYPES.GLOBAL_SIGN_IN_SAGA, login)
  yield takeLatest(TYPES.GLOBAL_GOOGLE_LOGIN_SAGA, googleSignIn)
}

export function* globalSaga() {
  yield all([fork(loginWatcher)])
}
