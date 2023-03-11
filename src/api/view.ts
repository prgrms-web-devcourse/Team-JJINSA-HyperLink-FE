import { axiosInstance } from '@/api/core';

type viewProps = {
  contentId: number;
  pageType: number;
};

export const patchViewResponse = async (viewData: viewProps) => {
  try {
    const response = await axiosInstance.patch(
      `/contents/${viewData.contentId}/view/${viewData.pageType}`
      // `/contents?id=${contentId}/view` // msw 전용
    );

    return response;
  } catch (error) {
    console.error('View error api', error);
  }
};
