import {applyMiddleware, compose, createStore, Middleware} from 'redux'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import { runSagas } from '../store/sagas'
import rootReducer from './index'

declare const window: IWindow

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const middleware: Middleware[] = [thunk, sagaMiddleware]
  let composeEnhancers = compose
  let store

  if (process.env.NODE_ENV !== 'production') {
    if (window.location.href.indexOf('consoleDebug=1') !== -1) {
      middleware.push(createLogger())
    }

    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middleware),
  ))

  runSagas(sagaMiddleware)

  return store
}
