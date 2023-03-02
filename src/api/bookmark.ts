import { axiosInstance } from '@/api/core';

export const getBookmarkResponse = async (contentId: number, type: boolean) => {
  const isBookmarked = type ? 0 : 1;

  try {
    const response = await axiosInstance.post(
      // `/contents/${contentId}/bookmark?type=${isBookmarked}`
      `/contents?id=${contentId}&type=${isBookmarked}` // msw 전용
    );

    return response;
  } catch (error) {
    console.error('bookmark error api', error);
  }
};
