import Timeout from 'await-timeout'

/**
 * @param { Promise } promise
 * @param { number= } timeout - ms after which promise will timeout
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export async function to<T, U = Error>(
  promise: Promise<T>,
  timeout?: number,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  try {
    let data: any
    if (timeout) {
      data = await Promise.race([
        promise,
        Timeout.set(timeout, 'Promise/Connection timeout error.'),
      ])
    } else {
      data = await promise
    }
    return [null, data]
  } catch (err) {
    if (errorExt) {
      Object.assign(err, errorExt)
    }
    return [err, undefined]
  }
}

export default to
