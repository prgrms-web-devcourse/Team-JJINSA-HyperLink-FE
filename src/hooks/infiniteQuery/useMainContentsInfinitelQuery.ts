import { getMainContents } from '@/api/mainContents';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useMainContentsInfiniteQuery = (category: string) => {
  const {
    data: getContents,
    fetchNextPage: getNextPage,
    isSuccess: getContentsIsSuccess,
    hasNextPage: getNextPageIsPossible,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery(
    ['mainContents', category],
    async ({ pageParam = 0 }) => await getMainContents(pageParam, category),
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
    isFetchingNextPage,
    refetch,
  };
};
