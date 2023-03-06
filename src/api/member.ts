import { axiosInstance } from './core';
import { myInfo } from '@/types/myInfo';

export const getMyInfo = async () => {
  const response: myInfo = await axiosInstance.get('/members/mypage');
  return response;
};
