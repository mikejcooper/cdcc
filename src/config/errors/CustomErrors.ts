/**
 * Log a HTTP Error
 * Provides additional insight in logs as to the error and handles UI notification
 */
export function logHTTPError(error, msg = null) {
  if (msg) {
    console.warn(msg)
  } else {
    const request = error.request
    console.warn(`API Failure: ${error.request.status} ${request._method} ${error.request}`)
  }

  if (error && error.response && error.response.data) {
    const response = error.response.data
    if (response.type && response.message) {
      console.warn(`${response.type}: ${response.message}`)
    }
    console.log(response)
  }
}
