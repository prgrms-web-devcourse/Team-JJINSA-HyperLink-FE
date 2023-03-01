import { axiosInstance } from '@/api/core';

export const getLikeResponse = async (contentId: number, type: boolean) => {
  let isLiked = 0;
  if (!type) isLiked = 1;

  try {
    const response = await axiosInstance.post(
      // `/like/${contentId}&type=${isLiked}`
      `/like?id=${contentId}&type=${isLiked}` // msw 전용
    );

    return response;
  } catch (error) {
    console.error('bookmark error api', error);
  }
};
