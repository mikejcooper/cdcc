import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { logHTTPError } from 'src/config/errors/CustomErrors'

// Create default config
const ax: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 15000, // 15 seconds
  headers: { 'Content-Type': 'multipart/form-data' },
})

// Add a request interceptor
ax.interceptors.request.use(
  async function(config: AxiosRequestConfig) {
    // Request data
    // config.headers.authorization = 'Bearer ' + (await FirebaseAPI.getUserAuthToken())
    return config
  },
  function(error: Error) {
    // Request error
    console.log(error.message)
    return Promise.reject(error)
  }
)

// Add a response interceptor
ax.interceptors.response.use(
  function(response: AxiosResponse) {
    // Response data
    return response
  },
  function(error: Error) {
    // Response error
    logHTTPError(error)
    return Promise.reject(error)
  }
)

export default ax
