import axios from 'axios';

const { VITE_API_END_POINT, VITE_TOKEN } = import.meta.env;
const API_BASE_URL =
  import.meta.env.MODE === 'development' ? VITE_API_END_POINT : '/api';

const axiosApi = (url: string, options = {}) => {
  const instance = axios.create({ baseURL: url, ...options });

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
      const token = '';
      if (config.headers) {
        if (token) {
          config.headers['Authorization'] = `bearer ${token}`;
        } else {
          config.headers['Authorization'] = VITE_TOKEN;
        }
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

export const axiosInstance = axiosApi(API_BASE_URL);
