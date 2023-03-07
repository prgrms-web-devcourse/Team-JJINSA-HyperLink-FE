import { axiosInstance } from '@/api/core';

export const postNotRecommendResponse = async (creatorId: number) => {
  try {
    const response = await axiosInstance.post(
      // `/creators/10/not-recommend`
      `/creators/${creatorId}/not-recommend`
      // `/creators?id=${creatorId}/not-recommend` // msw 전용
    );

    return response;
  } catch (error) {
    console.error('not-recommend error api', error);
  }
};
