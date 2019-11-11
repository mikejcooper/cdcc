import { call } from 'redux-saga/effects'
import ax from 'src/api/axios'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

function* DELAY(ms: number) {
  yield call(delay, ms)
}

async function get() {
  await ax.get('http://webcode.me').then((res: any) => {
    console.log(res.data)
  })
}

const exampleApi = { DELAY, get }

export default exampleApi
