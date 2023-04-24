import { axiosInstance } from '@/api/core';

export const postBookmarkResponse = async (
  contentId: number,
  type: boolean
) => {
  const isBookmarked = type ? 0 : 1;

  try {
    const response = await axiosInstance.post(
      `/bookmark/${contentId}?type=${isBookmarked}`
    );

    return response;
  } catch (error) {
    console.error('bookmark error api', error);
  }
};
