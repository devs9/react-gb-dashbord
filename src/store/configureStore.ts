import {Store, applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'

import rootSaga from './rootSaga'
import rootReducer from './rootReducer'
import {IStore} from './ts'

function configureStore(): Store<IStore> {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = composeWithDevTools({})
  const middleware = [thunk, sagaMiddleware]
  const initStore = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)))

  sagaMiddleware.run(rootSaga)
  return initStore
}

export default configureStore()
