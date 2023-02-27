import axios from 'axios';

const BASE_URL = process.env.NODE_ENV;

const baseRequest = axios.create({
  baseURL: BASE_URL,
});

const authRequest = axios.create({
  baseURL: BASE_URL,
});

baseRequest.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authRequest.interceptors.request.use(
  (config) => {
    config.headers.authorization = 'Bearer ' + 'token';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { baseRequest, authRequest };
