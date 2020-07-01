import {createAction, action} from 'typesafe-actions'

import {GLOBAL_TYPES as TYPES} from './types'
import {ErrorT, ProfileT} from './ts'

export const authStart = createAction(TYPES.GLOBAL_START)()
export const authLogout = createAction(TYPES.GLOBAL_LOGOUT)()
export const authFailure = createAction(TYPES.GLOBAL_FAILURE)<ErrorT>()
export const authSuccess = createAction(TYPES.GLOBAL_SUCCESS)<ProfileT>()

export const googleAuthSaga = () => action(TYPES.GLOBAL_GOOGLE_LOGIN_SAGA)
export const fbAuthSaga = () => action(TYPES.GLOBAL_FB_LOGIN_SAGA)
