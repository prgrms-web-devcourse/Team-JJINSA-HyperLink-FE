import { axiosInstance } from '@/api/core';

export const getNotRecommendResponse = async (creatorId: number) => {
  try {
    const response = await axiosInstance.post(
      // `/creators/10/not-recommend`
      // `/contents?id=${contentId}&type=${isBookmarked}` // msw bookmark 전용
      // `/like?id=${contentId}&type=${isLiked}` // msw like 전용
      `/creators?id=${creatorId}/not-recommend` // msw 전용
    );

    return response;
  } catch (error) {
    console.error('not-recommend error api', error);
  }
};
