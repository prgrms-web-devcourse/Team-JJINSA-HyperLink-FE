import { axiosInstance } from '@/api/core';
import { content } from '@/types/contents';

export const getCardList = async (category: string) => {
  try {
    const response: content[] = await axiosInstance.get(
      `/contents?category=${category}&creator=1&page=1&size=12`
    );

    return response;
  } catch (error) {
    console.error('api', error);
  }
};
