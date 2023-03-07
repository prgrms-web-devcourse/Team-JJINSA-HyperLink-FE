import { getHistory } from '@/api/history';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useHistoryContentsInfiniteQuery = () => {
  const {
    data: getHistoryContents,
    fetchNextPage: getNextPage,
    isSuccess: getContentsIsSuccess,
    hasNextPage: getNextPageIsPossible,
    status,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ['historyContents'],
    ({ pageParam = 0 }) => getHistory(pageParam),
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
    getHistoryContents,
    getNextPage,
    getContentsIsSuccess,
    getNextPageIsPossible,
    status,
    isFetching,
    isFetchingNextPage,
  };
};
