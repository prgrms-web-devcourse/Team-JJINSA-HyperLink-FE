import axios from 'axios';

const { VITE_BASE_URL } = import.meta.env;
const API_BASE_URL =
  import.meta.env.MODE === 'development' ? VITE_BASE_URL : '/api';

const axiosApi = (options = {}) => {
  const instance = axios.create({ baseURL: API_BASE_URL, ...options });

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
      // const token = 'token';
      // if (config.headers && token) {
      //   config.headers['Authorization'] = `bearer ${token}`;
      // }
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
