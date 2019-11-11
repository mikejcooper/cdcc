import { BaseAction } from 'src/actions/actionTypes'

export const exampleActionIds = {
  GET_DATA_REQUEST: 'GET_DATA_REQUEST',
  GET_DATA_REQUEST_SUCCESS: 'GET_DATA_REQUEST_SUCCESS',
  GET_DATA_REQUEST_FAILED: 'GET_DATA_REQUEST_FAILED',
}

const getData: () => BaseAction = () => ({
  type: exampleActionIds.GET_DATA_REQUEST,
  payload: null,
})

export const exampleActions = {
  getData,
}
