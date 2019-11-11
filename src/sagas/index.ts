import { all, fork } from 'redux-saga/effects'
import { exampleSaga } from 'src/sagas/example.saga'

export default function* rootSaga() {
  yield all([...exampleSaga])
}
