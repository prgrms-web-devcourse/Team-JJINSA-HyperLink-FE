import { useRecoilState } from 'recoil';
import ButtonGroup from '@/components/buttonGroup';
import { BookmarkContent, HistoryContent } from '@/components/history';
import { selectedFilterHistoryPageState } from '@/stores/selectedCategory';
import * as style from './style.css';

const CATEGORIES = ['bookmark', 'history'];

const HistoryPage = () => {
  const [selectedFilter, setSelectedFilter] = useRecoilState<string>(
    selectedFilterHistoryPageState
  );

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
