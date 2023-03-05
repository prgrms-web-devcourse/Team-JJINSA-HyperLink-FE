import { axiosInstance } from './core';

export const getAllCreators = async () => {
  try {
    const response = await axiosInstance.get('/admin/creators');

    return response;
  } catch (error) {
    console.error(error);
  }
};

type addCreatorProps = {
  name: string;
  profileImgUrl?: string;
  description: string;
  categoryName: 'develop' | 'beauty' | 'finance';
};
type addCreatorResponse = {
  creatorId: number;
} & addCreatorProps;

export const addCreator = async (data: addCreatorProps) => {
  try {
    const response: addCreatorResponse = await axiosInstance.post(
      '/admin/creators',
      data
    );

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
  try {
    const response = await axiosInstance.get('/admin/contents');

    return response;
  } catch (error) {
    console.error(error);
  }
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
