import { content, creator, views } from '@/types/admin';
import { isSameDate } from '@/utils/date';
import { getItem } from '@/utils/storage';
import { axiosInstance } from './core';

export const getAllCreators = async () => {
  const response: creator[] = await axiosInstance.get('/admin/creators');

  return response;
};

type addCreatorProps = {
  name: string;
  profileImgUrl?: string;
  description: string;
  categoryName: 'develop' | 'beauty' | 'finance';
};

export const addCreator = async (data: addCreatorProps) => {
  try {
    const response = await axiosInstance.post('/admin/creators', data);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCreator = async (creatorId: number) => {
  try {
    const response = await axiosInstance.delete(`/admin/creators/${creatorId}`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getDeactivatedContents = async () => {
  const response: content[] = await axiosInstance.get('/admin/contents');

  return response;
};

export const activateContent = async (contentId: number) => {
  try {
    const response = await axiosInstance.post(
      `admin/contents/${contentId}/activate`
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteContent = async (contentId: number) => {
  try {
    const response = await axiosInstance.delete(`/admin/contents/${contentId}`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getYesterdayViews = async () => {
  const storedWeeklyViews: views[] = getItem('WEEKLY_VIEWS', []);
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));

  if (storedWeeklyViews.length) {
    const storedYesterdayViews = storedWeeklyViews.find((storedDailyViews) =>
      isSameDate(new Date(storedDailyViews.createdDate), yesterday)
    );

    if (storedYesterdayViews) {
      return storedYesterdayViews;
    }
  }

  const response: views = await axiosInstance.get(
    '/admin/dashboard/all-category/view'
  );

  return response;
};
