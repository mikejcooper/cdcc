import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducers } from 'src/reducers'
import rootSaga from 'src/sagas'

const sagaMiddleware = createSagaMiddleware()

let middleware = applyMiddleware(sagaMiddleware)

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION__'] && window['__REDUX_DEVTOOLS_EXTENSION__']()

if (window['__REDUX_DEVTOOLS_EXTENSION__']) {
  middleware = compose(
    middleware,
    composeEnhancers
  )
}
const store = createStore(reducers, middleware)

sagaMiddleware.run(rootSaga)

export default store
