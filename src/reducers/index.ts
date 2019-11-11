import { combineReducers } from 'redux'
import { IExampleState, exampleReducer } from 'src/reducers/example.reducer'

export interface IAppState {
  exampleState: IExampleState
}

export const reducers = combineReducers<IAppState>({
  exampleState: exampleReducer,
})
