import { views } from '@/types/admin';
import { WEEKLY_VIEWS } from '@/utils/constants/storage';
import { isSameDate } from '@/utils/date';
import { getItem, setItem } from '@/utils/storage';

export const updateWeeklyViews = (yesterdayViews: views) => {
  const weeklyViews: views[] = getItem(WEEKLY_VIEWS, []);
  const today = new Date();
  const yesterday = new Date(today.setDate(today.getDate() - 1));

  if (weeklyViews.length === 7) {
    if (
      !weeklyViews.some((views) =>
        isSameDate(new Date(views.createdDate), yesterday)
      )
    ) {
      weeklyViews.shift();
      setItem(WEEKLY_VIEWS, [...weeklyViews, yesterdayViews]);
    }
  } else if (weeklyViews.length < 7) {
    if (
      !weeklyViews.some((views) =>
        isSameDate(new Date(views.createdDate), yesterday)
      ) &&
      !weeklyViews.some((views) =>
        isSameDate(
          new Date(views.createdDate),
          new Date(yesterdayViews.createdDate)
        )
      )
    ) {
      setItem(WEEKLY_VIEWS, [...weeklyViews, yesterdayViews]);
    }
  }
};
