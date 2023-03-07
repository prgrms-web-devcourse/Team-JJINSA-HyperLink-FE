import { axiosInstance } from './core';

export type myInfoResponse = {
  email: string;
  nickname: string;
  career: string;
  careerYear: string;
  profileImage: string;
};

export type myNewInfo = {
  nickname: string;
  career: string;
  careerYear: string;
};

export type attentionCategory = string[];

export const getMyInfo = async () => {
  try {
    const response: myInfoResponse = await axiosInstance.get('/members/mypage');

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const putAttentionCategory = async (
  newAttentionCategory: attentionCategory
) => {
  try {
    const response = await axiosInstance.put('/members/attention-category', {
      attentionCategory: newAttentionCategory,
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
