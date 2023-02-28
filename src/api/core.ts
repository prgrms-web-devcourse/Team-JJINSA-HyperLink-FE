import axios from 'axios';

const BASE_URL = process.env.NODE_ENV;

const axiosApi = (options = {}) => {
  const instance = axios.create({ baseURL: BASE_URL, ...options });

  instance.defaults.timeout = 2500;

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (config) => {
      const token = 'token';
      if (config.headers && token) {
        config.headers['Authorization'] = `bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error(error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export const axiosInstance = axiosApi();
