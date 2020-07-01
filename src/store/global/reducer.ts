import {ActionType, createReducer} from 'typesafe-actions'

import * as Actions from './actions'
import {IGlobalStore} from './ts'

export const initialState: IGlobalStore = {
  isAuth: false,
  isFetch: false,
  profile: {
    email: '',
    fullName: ''
  }
}

const globalReducer = createReducer<IGlobalStore, ActionType<typeof Actions>>(initialState)
  .handleAction(Actions.authStart, (state, _) => ({...state, isFetch: true}))
  .handleAction(Actions.authLogout, (state, _) => initialState)
  .handleAction(Actions.authFailure, (state, action) => {
    return {
      ...state,
      isFetch: false,
      errors: action.payload
    }
  })
  .handleAction(Actions.authSuccess, (state, action) => {
    return {
      isAuth: true,
      isFetch: false,
      profile: action.payload
    }
  })

export default globalReducer
