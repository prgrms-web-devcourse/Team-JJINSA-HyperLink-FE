import { useParams } from 'react-router-dom';
import { getSearchContents } from '@/api/contents';
import { useQuery } from '@tanstack/react-query';
import { contents } from '@/types/contents';

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
  if (isLoading) return <h3>로딩 중...</h3>;

  return (
    <div>
      <h1>검색 결과 페이지 {keyword}</h1>
      {searchResult.contents.length ? (
        <ul>
          {searchResult.contents.map(({ contentId, title }) => (
            <li key={contentId}>{title}</li>
          ))}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default searchResultPage;
