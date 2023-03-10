import { companies, contents, creators, weeklyViews } from '@/types/admin';
import { WEEKLY_VIEWS } from '@/utils/constants/storage';
import { isSameDate } from '@/utils/date';
import { getItem, removeItem, setItem } from '@/utils/storage';
import { axiosInstance } from './core';

export const getAllCreators = async (page: number, size: number) => {
  const response: creators = await axiosInstance.get(
    `/admin/creators?page=${page}&size=${size}`
  );

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

export const getDeactivatedContents = async (page: number, size: number) => {
  const response: contents = await axiosInstance.get(
    `/admin/contents?page=${page}&size=${size}`
  );

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

export const getNotUsingRecommendCompanies = async (
  page: number,
  size: number
) => {
  const response: companies = await axiosInstance.get(
    `/admin/companies?page=${page}&size=${size}`
  );

  return response;
};

export const modifyUsingRecommendCompany = async (companyId: number) => {
  try {
    const response = await axiosInstance.put(`/admin/companies/${companyId}`);

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const getWeeklyViews = async () => {
  const storedWeeklyViews: weeklyViews = getItem(WEEKLY_VIEWS, {});
  const today = new Date();

  if (storedWeeklyViews.createdDate) {
    const isAlreadyStored = isSameDate(
      new Date(storedWeeklyViews.createdDate),
      today
    );

    if (isAlreadyStored) {
      return storedWeeklyViews;
    }
  }

  const response: weeklyViews = await axiosInstance.get(
    '/admin/dashboard/all-category/view'
  );

  setItem(WEEKLY_VIEWS, response);

  return response;
};
