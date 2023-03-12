import { Button } from '../common';
import * as style from './style.css';

const CATEGORIES: { [key: string]: string } = {
  all: '전체',
  develop: '개발',
  beauty: '패션/뷰티',
  finance: '경제/금융',
  recent: '최신순',
  popular: '인기순',
  bookmark: '북마크',
  history: '히스토리',
};

type ButtonGroupProps = {
  buttonData: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
};

const ButtonGroup = ({
  buttonData,
  selectedCategory,
  setSelectedCategory,
}: ButtonGroupProps) => {
  return (
    <div className={style.filterButtonGroup}>
      {buttonData.map((category, idx) => {
        return (
          <Button
            key={idx}
            version={selectedCategory === category ? 'gray' : 'white'}
            isBold={selectedCategory === category ? true : false}
            shape="circle"
            text={CATEGORIES[category]}
            onClick={() => setSelectedCategory(category)}
          />
        );
      })}
    </div>
  );
};

export default ButtonGroup;
