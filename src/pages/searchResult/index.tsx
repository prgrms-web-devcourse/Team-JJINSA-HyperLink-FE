import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Heading, Spinner } from '@/components/common';
import CardList from '@/components/cardList';
import { getSearchContents } from '@/api/contents';
import { contents } from '@/types/contents';
import * as style from './style.css';

const searchResultPage = () => {
  const { keyword } = useParams() as { keyword: string };

  const {
    data: searchResult,
    isLoading,
    isError,
  } = useQuery<contents>(
    ['search', keyword],
    () => getSearchContents(keyword),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isError) return <h3>에러 발생</h3>;
  if (isLoading) return <Spinner size="huge" />;

  const { contents } = searchResult;

  return (
    <div className={style.wrapper}>
      {contents.length ? (
        <>
          <div className={style.searchInfo}>
            <p className={style.resultStats}>
              총 {contents.length}개의 검색 결과
            </p>
            <Heading level={5}>
              &apos;<strong>{keyword}</strong>&apos;에 대한 검색 결과
            </Heading>
          </div>
          <CardList cards={contents} />
        </>
      ) : (
        <p className={style.noResult}>{keyword}에 대한 검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default searchResultPage;
