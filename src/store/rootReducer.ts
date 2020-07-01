import {combineReducers} from 'redux'

import * as Reducers from './reducers'

const rootReducer = combineReducers({
  global: Reducers.globalReducer
})

export default rootReducer
