import {put} from 'redux-saga/effects'

import {setFBUser, fbSignIn, fbCheckLogin} from '../utils'
import {authStart, authSuccess, authFailure} from '../actions'

export function* fbLogin() {
  try {
    yield put(authStart())
    const isCheckStatus = yield fbCheckLogin()

    if (isCheckStatus !== 'connected') {
      yield fbSignIn()
    }

    yield setFBUser(yield fbCheckLogin())
  } catch (error) {
    yield put(authFailure('FB LOGIN ERROR, fbSignIn'))
  }
}

export function* googleLogin() {
  try {
    yield put(authStart())

    const googleUser = yield gapi.auth2?.getAuthInstance()?.signIn()
    const googleProfile = yield googleUser?.getBasicProfile()

    if (googleProfile?.getId()) {
      const profile = {
        email: googleProfile.getEmail(),
        image: googleProfile.getImageUrl(),
        fullName: googleProfile.getName()
      }

      yield put(authSuccess(profile))
    }
  } catch (error) {
    yield put(authFailure('GOOGLE LOGIN ERROR, googleLogin'))
  }
}
