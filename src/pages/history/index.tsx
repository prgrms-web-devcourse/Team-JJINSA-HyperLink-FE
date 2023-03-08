import { useRecoilState } from 'recoil';
import ButtonGroup from '@/components/buttonGroup';
import Bookmark from '@/components/history/Bookmark';
import History from '@/components/history/History';
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
      {selectedFilter === 'bookmark' ? <Bookmark /> : <History />}
    </div>
  );
};

export default HistoryPage;
