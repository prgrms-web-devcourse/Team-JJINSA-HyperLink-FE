import { axiosInstance } from './core';
import { myInfo } from '@/types/myInfo';

export type attentionCategory = string[];

export const getMyInfo = async () => {
  const response: myInfo = await axiosInstance.get('/members/mypage');
  return response;
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

export const updateProfileImage = async (profileImgUrl: string) => {
  try {
    const response = await axiosInstance.post('/members/profile-image', {
      profileImgUrl,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
