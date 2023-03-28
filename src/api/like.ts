import { axiosInstance } from '@/api/core';

export const postLikeResponse = async (contentId: number, type: boolean) => {
  try {
    const response = await axiosInstance.post(`/like/${contentId}`, {
      addLike: `${!type}`,
    });

    return response;
  } catch (error) {
    console.error('like error api', error);
  }
};
