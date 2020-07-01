import {createReducer} from 'typesafe-actions'

import * as Actions from './actions'
import {IGlobalStore, GlobalActionsT} from '../../interfaces/Store'

export const initialState: IGlobalStore = {
  isAuth: false,
  isFetch: false,
  profile: {
    email: '',
    fullName: ''
  }
}

const globalReducer = createReducer<IGlobalStore, GlobalActionsT>(initialState)
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

//

//
//
//
// export const $globalReducer: Reducer<IGlobalStore> = (state = initialState, action) => {
//   switch (action.type) {
//     case globalTypes.start: {
//       return {...state, isFetch: true}
//     }
//
//     case globalTypes.logout: {
//       return initialState
//     }
//
//     case globalTypes.success: {
//       return {
//         isAuth: true,
//         isFetch: false,
//         ...action.payload
//       }
//     }
//
//     case globalTypes.failure: {
//       return {
//         ...state,
//         isAuth: false,
//         isFetch: false,
//         errors: action.payload
//       }
//     }
//
//     default: {
//       return state
//     }
//   }
// }
export default globalReducer
