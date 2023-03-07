import { axiosInstance } from '@/api/core';
import { contents, searchContents } from '@/types/contents';

export const getSearchContents = async (pageParam: number, keyword: string) => {
  const response: searchContents = await axiosInstance.get(
    `/contents/search?keyword=${keyword}&page=${pageParam}&size=10`
  );

  const searchResult: contents = response.getContentsCommonResponse;

  return {
    // 실제 데이터
    content_page: searchResult.contents,
    // 반환 값에 현재 페이지를 넘겨주자
    current_page: pageParam,
    // 페이지가 마지막인지 알려주는 서버에서 넘겨준 true/false 값
    isLast: !searchResult.hasNext,
    totalCount: response.resultCount,
  };
};
