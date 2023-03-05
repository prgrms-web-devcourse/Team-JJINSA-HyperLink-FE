import { axiosInstance } from './core';

const ACCESS_TOKEN_EXPIRY_TIME = 60 * 60 * 1000;

type googleOAuthResponse = {
  accessToken: string;
  wasSignedUp: boolean;
  email: string;
};
export const googleOAuth = async (code: string) => {
  try {
    const response: googleOAuthResponse = await axiosInstance.get(
      `/members/oauth/code/google?code=${code}`
    );
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`;

    return response;
  } catch (error) {
    console.error(error);
  }
};

type authResponse = {
  accessToken: string;
};
type loginResponse = {
  admin: boolean;
} & authResponse;
export const login = async () => {
  try {
    const response: loginResponse = await axiosInstance.post('/members/login');
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`;
    setTimeout(silentRefresh, ACCESS_TOKEN_EXPIRY_TIME - 60000);

    return response;
  } catch (error) {
    console.error(error);
  }
};

type signupProps = {
  email: string;
  gender: 'man' | 'woman';
  nickname: string;
  attentionCategory: string[];
  career: string;
  careerYear: string;
  birthYear: number;
};

export const signup = async (data: signupProps) => {
  try {
    const response: authResponse = await axiosInstance.post(
      '/members/signup',
      data
    );
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`;
    setTimeout(silentRefresh, ACCESS_TOKEN_EXPIRY_TIME - 60000);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    const response = await axiosInstance.post('/members/logout');
    axiosInstance.defaults.headers.common.Authorization = '';

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const silentRefresh = async () => {
  try {
    const response: loginResponse = await axiosInstance.get(
      '/members/access-token'
    );
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.accessToken}`;

    return response;
  } catch (error) {
    console.error(error);
  }
};
