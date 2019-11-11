import { put, takeEvery } from 'redux-saga/effects'
import { exampleActionIds } from 'src/actions/exampleActions'
import exampleApi from 'src/api/exampleApi'
import to from 'src/config/async/await-to'

function* handleGetDataRequest() {
  const result1 = yield exampleApi.DELAY(1500)

  const [err, data]: [Error, any] = yield to(exampleApi.get())

  const result = 'hello'

  if (!err) {
    yield put({
      type: exampleActionIds.GET_DATA_REQUEST_SUCCESS,
      payload: result,
    })
  } else {
    yield put({
      type: exampleActionIds.GET_DATA_REQUEST_FAILED,
      payload: result,
    })
  }
}

export const exampleSaga = [takeEvery(exampleActionIds.GET_DATA_REQUEST, handleGetDataRequest)]
