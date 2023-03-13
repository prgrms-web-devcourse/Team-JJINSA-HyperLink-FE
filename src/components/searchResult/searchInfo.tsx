import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { Heading } from '@/components/common';
import { isHomeScrolledState } from '@/stores/scroll';
import * as style from './style.css';

type searchInfoProps = {
  keyword: string;
  searchResultCount: number;
};

const SearchInfo = ({ keyword, searchResultCount }: searchInfoProps) => {
  const setIsHomeScrolled = useSetRecoilState(isHomeScrolledState);

  useEffect(() => {
    setIsHomeScrolled(true);
  }, []);

  return (
    <div className={style.searchInfo}>
      <p className={style.resultStats}>총 {searchResultCount}개의 검색 결과</p>
      <Heading level={5}>
        &apos;<strong>{keyword}</strong>&apos;에 대한 검색 결과
      </Heading>
    </div>
  );
};

export default SearchInfo;
