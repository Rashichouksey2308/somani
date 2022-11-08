<<<<<<< Updated upstream
import axios from 'axios';
import API from './endpoints';

/* Setting the baseURL to the API.baseUrl. */
const baseURL = `${API.baseUrl}`;
=======
import axios from 'axios'
import API from './endpoints'

/* Setting the baseURL to the API.baseUrl. */
const baseURL = `${API.baseUrl}`
>>>>>>> Stashed changes

/* Creating a new instance of axios with the baseURL, withCredentials, and Cache. */
const app = axios.create({
  baseURL,
  withCredentials: true,
<<<<<<< Updated upstream
  Cache: 'no-cache',
});
=======
  Cache: 'no-cache'
})
>>>>>>> Stashed changes

/* This is a way to handle errors in axios. */
app.interceptors.response.use(
  (response) => response,
<<<<<<< Updated upstream
  (error) => Promise.reject(error.response.data.err),
);

export default app;
=======
  (error) => Promise.reject(error.response.data.err)
)

export default app
>>>>>>> Stashed changes
