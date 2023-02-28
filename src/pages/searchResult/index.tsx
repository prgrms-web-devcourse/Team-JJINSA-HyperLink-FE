import { useParams } from 'react-router-dom';
import { getSearchContents } from '@/api/contents';
import { useQuery } from '@tanstack/react-query';
import { contents } from '@/types/contents';
import ArticleCard from '@/components/cardItem/article';

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

  const { contents } = searchResult;

  return (
    <div>
      <h1>검색 결과 페이지 {keyword}</h1>
      {contents.length ? (
        <ul>
          {contents.map(
            ({
              contentId,
              contentImgUrl,
              createdAt,
              creator,
              isBookmarked,
              isLiked,
              likeCount,
              link,
              title,
              viewCount,
              recommendationCompanies,
            }) => (
              <ArticleCard
                key={contentId}
                contentImgUrl={contentImgUrl}
                isBookmarked={isBookmarked}
                isLiked={isLiked}
                likeCount={likeCount}
                viewCount={viewCount}
                link={link}
                creator={creator}
                createdAt={createdAt}
                title={title}
                recommendationCompanies={recommendationCompanies}
              />
            )
          )}
        </ul>
      ) : (
        <p>검색 결과가 없습니다.</p>
      )}
    </div>
  );
};

export default searchResultPage;
