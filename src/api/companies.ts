import { axiosInstance } from '@/api/core';
import { creators } from '@/types/contents';

type verificationCompany = {
  companyEmail: string;
  verification: string;
  logoImgUrl: string;
};

export const sendCompanyEmail = async (companyEmail: string) => {
  try {
    const response: creators = await axiosInstance.post(`/companies/auth`, {
      companyEmail,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const verificationCompany = async (
  verificationCompany: verificationCompany
) => {
  try {
    const response: creators = await axiosInstance.post(
      `/companies/verification`,
      verificationCompany
    );

    return response;
  } catch (error) {
    console.error(error);
  }
};
