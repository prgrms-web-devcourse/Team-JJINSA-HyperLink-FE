import { getMainContents } from '@/api/mainContents';
import { selectedTabState } from '@/stores/tab';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';

export const useMainContentsInfiniteQuery = (category: string) => {
  const tabState = useRecoilValue(selectedTabState);

  const {
    data: getContents,
    fetchNextPage: getNextPage,
    isSuccess: getContentsIsSuccess,
    hasNextPage: getNextPageIsPossible,
    isFetchingNextPage,
    refetch,
    status,
  } = useInfiniteQuery(
    ['mainContents', category],
    async ({ pageParam = 0 }) =>
      await getMainContents(pageParam, category, tabState),
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
    status,
  };
};
