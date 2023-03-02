import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getSearchContents } from '@/api/contents';
import { contents } from '@/types/contents';
import { Spinner } from '@/components/common';
import * as style from './style.css';
import CardList from '@/components/cardList';

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
      <h1>검색 결과 페이지 {keyword}</h1>
      {contents.length ? (
        <CardList cards={contents} />
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default searchResultPage;
