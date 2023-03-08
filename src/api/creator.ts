import { axiosInstance } from '@/api/core';
import { creator } from '@/types/contents';

export const getCreatorInfo = async (creatorId: number) => {
  const response: creator = await axiosInstance.get(`/creators/${creatorId}`);
  return response;
};
