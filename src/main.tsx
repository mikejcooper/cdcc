import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'src/config/store'
import ExamplePage from 'src/pages/example/example.page'

ReactDOM.render(
  <Provider store={store}>
    <>
      <ExamplePage />
    </>
  </Provider>,
  document.getElementById('root')
)
