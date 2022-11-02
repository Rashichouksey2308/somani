import axios from 'axios';
import API from './endpoints';

/* Setting the baseURL to the API.baseUrl. */
const baseURL = `${API.baseUrl}`;

/* Creating a new instance of axios with the baseURL, withCredentials, and Cache. */
const app = axios.create({
  baseURL,
  withCredentials: true,
  Cache: 'no-cache',
});

/* This is a way to handle errors in axios. */
app.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response.data.err),
);

export default app;
