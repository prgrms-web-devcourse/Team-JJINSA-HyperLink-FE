import { axiosInstance } from '@/api/core';
import { contents } from '@/types/contents';

export const getSearchContents = async (keyword: string) => {
  try {
    const response: contents = await axiosInstance.get(
      `/contents/search?keyword=${keyword}&page=0&size=10`
    );
    return response;
  } catch (error) {
    console.error('api', error);
  }
};
