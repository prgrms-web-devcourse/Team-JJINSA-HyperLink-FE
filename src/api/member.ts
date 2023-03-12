import { axiosInstance } from './core';
import { myInfo } from '@/types/myInfo';

export type myNewInfo = {
  nickname: string;
  career: string;
  careerYear: string;
};

export const getMyInfo = async () => {
  const response: myInfo = await axiosInstance.get('/members/mypage');
  return response;
};

export const updateProfileImage = async (profileImgUrl: string) => {
  try {
    const response = await axiosInstance.put('/members/profile-image', {
      profileImgUrl,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateMyInfo = async (myNewInfo: myNewInfo) => {
  try {
    const response = await axiosInstance.put('/members/update', myNewInfo);

    return response;
  } catch (error) {
    console.error(error);
  }
};
