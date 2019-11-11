import { BaseAction } from 'src/actions/actionTypes'
import { exampleActionIds } from 'src/actions/exampleActions'

export interface IExampleState {
  isFetchingData: boolean
  data: string
}

const defaultState = {
  isFetchingData: false,
  data: '',
}

export const exampleReducer = (state: IExampleState = defaultState, action: BaseAction) => {
  switch (action.type) {
    case exampleActionIds.GET_DATA_REQUEST:
      return {
        ...state,
        isFetchingData: true,
      }
    case exampleActionIds.GET_DATA_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetchingData: false,
      }
    case exampleActionIds.GET_DATA_REQUEST_FAILED:
      return {
        ...state,
        isFetchingData: false,
      }
  }

  return state
}
