import { axiosInstance } from '@/api/core';
import { dailyBriefing } from '@/types/dailyBriefing';

export const getDailyBriefingData = async () => {
  const response: dailyBriefing = await axiosInstance.get(`/daily-briefing`);
  return response;
};
