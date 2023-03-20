import { axiosInstance } from '@/api/core';

export const postNotRecommendResponse = async (creatorId: number) => {
  try {
    const response = await axiosInstance.post(
      `/creators/${creatorId}/not-recommend`
    );

    return response;
  } catch (error) {
    console.error('not-recommend error api', error);
  }
};
