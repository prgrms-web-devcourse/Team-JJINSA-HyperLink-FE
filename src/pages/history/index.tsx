import { useRecoilState, useSetRecoilState } from 'recoil';
import ButtonGroup from '@/components/buttonGroup';
import { BookmarkContent, HistoryContent } from '@/components/history';
import { selectedFilterHistoryPageState } from '@/stores/selectedCategory';
import * as style from './style.css';
import { selectedTabState } from '@/stores/tab';
import { useEffect } from 'react';

const CATEGORIES = ['bookmark', 'history'];

const HistoryPage = () => {
  const [selectedFilter, setSelectedFilter] = useRecoilState<string>(
    selectedFilterHistoryPageState
  );

  const setTabState = useSetRecoilState(selectedTabState);

  useEffect(() => {
    setTabState('none');
  }, []);

  return (
    <div className={style.wrapper}>
      <ButtonGroup
        buttonData={CATEGORIES}
        selectedCategory={selectedFilter}
        setSelectedCategory={setSelectedFilter}
      />
      {selectedFilter === 'bookmark' ? <BookmarkContent /> : <HistoryContent />}
    </div>
  );
};

export default HistoryPage;
