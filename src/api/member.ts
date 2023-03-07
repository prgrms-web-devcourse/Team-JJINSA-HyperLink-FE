import { axiosInstance } from './core';

export type myInfoResponse = {
  email: string;
  nickname: string;
  career: string;
  careerYear: string;
  profileImage: string;
};

export type myNewInfo = {
  nickname: string;
  career: string;
  careerYear: string;
};

export const getMyInfo = async () => {
  try {
    const response: myInfoResponse = await axiosInstance.get('/members/mypage');

    return response;
  } catch (error) {
    console.error(error);
  }
};


export const updateProfileImage = async (profileImgUrl: string) => {
  try {
    const response = await axiosInstance.post('/members/profile-image', {
      profileImgUrl,
    });

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const updateMyInfo = async (myNewInfo: myNewInfo) => {
  try {
    const response = await axiosInstance.put('/members/update', myNewInfo);

    return response;
  } catch (error) {
    console.error(error);
  }
};
