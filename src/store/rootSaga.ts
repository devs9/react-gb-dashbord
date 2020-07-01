import {all, fork} from 'redux-saga/effects'

import {globalSaga} from './global'

export default function* rootSaga() {
  yield all([fork(globalSaga)])
}
