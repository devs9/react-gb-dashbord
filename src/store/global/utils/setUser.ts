import {put} from 'redux-saga/effects'

import {authSuccess} from '../actions'
import {fbMeUser, fbMePhoto} from './fbApiCalls'

export function* setFBUser(status: string) {
  if (status === 'connected') {
    const meUser = yield fbMeUser()
    const mePhoto = yield fbMePhoto()
    const profile = {
      email: meUser.first_name,
      image: mePhoto?.data?.url,
      fullName: `${meUser.first_name} ${meUser.lastName}`
    }

    yield put(authSuccess(profile))
  }
}
