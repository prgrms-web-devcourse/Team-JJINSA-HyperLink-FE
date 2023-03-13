import { getHistoryContents, getBookmarkContents } from '@/api/history';
import { selectedCategoryState } from '@/stores/selectedCategory';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

const QUERY_KEY = {
  bookmark: 'bookmarkContents',
  history: 'historyContents',
};

export const useHistoryInfiniteQuery = (key: keyof typeof QUERY_KEY) => {
  const selectedCategory = useRecoilValue(selectedCategoryState);

  const {
    data: getContents,
    fetchNextPage: getNextPage,
    isSuccess: getContentsIsSuccess,
    hasNextPage: getNextPageIsPossible,
    status,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['mainContents', selectedCategory],
    ({ pageParam = 0 }) =>
      key === 'bookmark'
        ? getBookmarkContents(pageParam)
        : getHistoryContents(pageParam),
    {
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage) => {
        // lastPage는 콜백함수에서 리턴한 값을 의미
        // lastPage: 직전에 반환된 리턴값
        if (!lastPage.isLast) return lastPage.current_page + 1;
        // 마지막 페이지면 undefined가 리턴되어서 hasNextPage는 false가 됨
        return undefined;
      },
    }
  );

  return {
    getContents,
    getNextPage,
    getContentsIsSuccess,
    getNextPageIsPossible,
    status,
    isFetching,
    isFetchingNextPage,
  };
};
