import { axiosInstance } from './core';

export type attentionCategory = string[];

export const getAttentionCategory = async () => {
  try {
    const response: attentionCategory = await axiosInstance.get(
      '/attention-category'
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const putAttentionCategory = async (
  newAttentionCategory: attentionCategory
) => {
  try {
    const response = await axiosInstance.put('/attention-category', {
      attentionCategory: newAttentionCategory,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};
