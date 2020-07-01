import {put} from 'redux-saga/effects'

import * as globalAction from '../actions'

export function* login() {
  try {
    yield put(globalAction.authStart())

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
    yield put(globalAction.authFailure('LOGIN ERROR'))
  }
}
