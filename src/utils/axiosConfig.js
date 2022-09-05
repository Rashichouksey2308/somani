import axios from 'axios';
import API from './endpoints'

const baseURL = `${API.baseUrl}`

const app = axios.create({
    baseURL,
    withCredentials: true,
    Cache: 'no-cache'
})

/* 
  The below is required if you want your API to return 
  server message errors. Otherwise, you'll just get 
  generic status errors.

  If you use the interceptor below, then make sure you 
  return an "err" (or whatever you decide to name it) message 
  from your express route: 
  
  res.status(404).json({ err: "You are not authorized to do that." })

*/
app.interceptors.response.use(
  response => (response), 
  error => (Promise.reject(error.response.data.err))
)

export default app;