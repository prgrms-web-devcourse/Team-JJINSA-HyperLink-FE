import ButtonGroup from '@/components/buttonGroup';
import { useRecoilState } from 'recoil';
import { selectedFilterHistoryPageState } from '@/stores/selectedCategory';
import Bookmark from '@/components/userStory/Bookmark';
import History from '@/components/userStory/History';
import * as style from './style.css';

const CATEGORIES = ['bookmark', 'history'];

const UserStoryPage = () => {
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

export default UserStoryPage;
