import { axiosInstance } from '@/api/core';

export const getViewResponse = async (contentId: number) => {
  try {
    const response = await axiosInstance.patch(
      // `/contents/${contentId}/view`
      `/contents?id=${contentId}/view` // msw 전용
    );

    return response;
  } catch (error) {
    console.error('View error api', error);
  }
};
