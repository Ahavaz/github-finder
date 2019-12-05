import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './ducks'
import sagas from './sagas'

const { NODE_ENV } = process.env

const isDev = NODE_ENV === 'development'

const middlewares = []

const sagaMonitor = isDev ? console.tron.createSagaMonitor() : null

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

middlewares.push(sagaMiddleware)

const dummy = _ => _

const store = createStore(
  reducers,
  compose(applyMiddleware(...middlewares), isDev ? console.tron.createEnhancer() : dummy)
)

sagaMiddleware.run(sagas)

export default store
