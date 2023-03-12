import { axiosInstance } from '@/api/core';
import { creators } from '@/types/contents';

export const getCreatorList = async (pageParam: number, category: string) => {
  const response: creators = await axiosInstance.get(
    `/creators?category=${category}&page=${pageParam}&size=25`
  );

  return {
    // 실제 데이터
    content_page: response.creators,
    // 반환 값에 현재 페이지를 넘겨주자
    current_page: pageParam,
    // 페이지가 마지막인지 알려주는 서버에서 넘겨준 true/false 값
    isLast: !response.hasNext,
  };
};
