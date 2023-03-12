import { axiosInstance } from '@/api/core';
import { contents } from '@/types/contents';

export const getMainContents = async (
  pageParam: number,
  category: string,
  tabState: string
) => {
  const sortType = tabState === 'RECENT_CONTENT' ? 'recent' : 'popular';
  let ContentsURL = '';

  switch (tabState) {
    case 'RECENT_CONTENT':
    case 'POPULAR_CONTENT':
      ContentsURL =
        category === 'all'
          ? `/contents/all?&page=${pageParam}&size=12&sort=${sortType}`
          : `/contents?category=${category}&page=${pageParam}&size=12&sort=${sortType}`;
      break;
    case 'SUBSCRIPTIONS':
      ContentsURL =
        category === 'all'
          ? `/subscriptions/contents/all?page=${pageParam}&size=12`
          : `/subscriptions/contents?category=${category}&page=${pageParam}&size=12`;
      break;
    default:
      break;
  }
  const response: contents = await axiosInstance.get(ContentsURL);
  return {
    // 실제 데이터
    content_page: response.contents,
    // 반환 값에 현재 페이지를 넘겨주자
    current_page: pageParam,
    // 페이지가 마지막인지 알려주는 서버에서 넘겨준 true/false 값
    isLast: !response.hasNext,
  };
};
