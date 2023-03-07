import { axiosInstance } from './core';

export type myInfoResponse = {
  email: string;
  nickname: string;
  career: string;
  careerYear: string;
  profileImage: string;
};

export const getMyInfo = async () => {
  try {
    const response: myInfoResponse = await axiosInstance.get('/members/mypage');

    return response;
  } catch (error) {
    console.error(error);
  }
};



