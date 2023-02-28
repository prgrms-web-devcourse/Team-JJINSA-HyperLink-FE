import { axiosInstance } from './core';

type myInfo = {
  email: string;
  nickname: string;
  career: string;
  careerYear: string;
  profileImage: string;
};

export const getMyInfo = async () => {
  try {
    const response: myInfo = await axiosInstance.get('/members/mypage');

    return response;
  } catch (error) {
    console.error(error);
  }
};
