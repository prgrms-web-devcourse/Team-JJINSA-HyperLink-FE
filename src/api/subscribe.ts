import { axiosInstance } from '@/api/core';

export const postSubscribeResponse = async (creatorId: number) => {
  const response = await axiosInstance.post(`/creators/${creatorId}/subscribe`);
  return response;
};
