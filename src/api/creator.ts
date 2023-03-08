import { axiosInstance } from '@/api/core';
import { creator, recommendedCreators } from '@/types/contents';

export const getCreatorInfo = async (creatorId: number) => {
  const response: creator = await axiosInstance.get(`/creators/${creatorId}`);
  return response;
};

export const getRecommendedCreators = async () => {
  const response: recommendedCreators = await axiosInstance.get(
    '/creators/recommend'
  );

  return response;
};
