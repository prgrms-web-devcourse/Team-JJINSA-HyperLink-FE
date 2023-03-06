import { Dropdown } from '@/components/common';
import useInput from '@/hooks/useInput';
import { views } from '@/types/admin';
import { CATEGORIES } from '@/utils/constants/signup';
import { getItem } from '@/utils/storage';
import { useState } from 'react';

const WeeklyViews = () => {
  const category = useInput(Object.keys(CATEGORIES)[0]);
  const weeklyViews: views[] = getItem('WEEKLY_VIEWS', []);
  const [currentCategoryViews, setCurrentCategoryViews] = useState(
    weeklyViews.map((dailyViews) => {
      return {
        ...dailyViews,
        oneDayView: dailyViews.oneDayView.filter(
          (viewByCategory) =>
            viewByCategory.categoryName === CATEGORIES[category.value]
        ),
      };
    })
  );

  const handleItemClick = (item: string) => {
    category.onChange(item);
    setCurrentCategoryViews(
      weeklyViews.map((dailyViews) => {
        return {
          ...dailyViews,
          oneDayView: dailyViews.oneDayView.filter(
            (viewByCategory) => viewByCategory.categoryName === CATEGORIES[item]
          ),
        };
      })
    );
  };

  return (
    <div>
      <Dropdown
        value={category.value}
        onItemClick={handleItemClick}
        items={Object.keys(CATEGORIES)}
      />
    </div>
  );
};

export default WeeklyViews;
