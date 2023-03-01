import { axiosInstance } from '@/api/core';
import { ArticleCardProps } from '@/components/cardItem/article';

export const getCardList = async (category: string) => {
  try {
    const response: ArticleCardProps[] = await axiosInstance.get(
      `/contents?category=${category}&creator=1&page=1&size=12`
    );

    return response;
  } catch (error) {
    console.error('api', error);
  }
};
