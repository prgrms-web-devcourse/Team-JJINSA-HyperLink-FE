import {
  getAllCreators,
  getDeactivatedContents,
  getYesterdayViews,
} from '@/api/admin';
import { Contents, Creators, WeeklyViews } from '@/components/admin';
import { Divider, Spinner } from '@/components/common';
import { content, creator, views } from '@/types/admin';
import { isSameDate } from '@/utils/date';
import { getItem, setItem } from '@/utils/storage';
import { useQuery } from '@tanstack/react-query';
import * as style from './style.css';

const Admin = () => {
  const { data: contents } = useQuery<content[]>(
    ['deactivatedContents'],
    getDeactivatedContents,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: creators } = useQuery<creator[]>(
    ['allCreators'],
    getAllCreators,
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: yesterdayViews } = useQuery<views>(
    ['yesterdayViews'],
    getYesterdayViews,
    {
      refetchOnWindowFocus: false,
    }
  );

  if (!contents || !creators || !yesterdayViews) {
    return <Spinner size="huge" />;
  }

  const updateWeeklyViews = () => {
    const weeklyViews: views[] = getItem('WEEKLY_VIEWS', []);

    if (!weeklyViews.length) {
      return;
    }

    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));

    if (weeklyViews.length === 7) {
      if (
        !weeklyViews.some((views) =>
          isSameDate(new Date(views.createdDate), yesterday)
        )
      ) {
        weeklyViews.shift();
        setItem('WEEKLY_VIEWS', [...weeklyViews, yesterdayViews]);
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
        setItem('WEEKLY_VIEWS', [...weeklyViews, yesterdayViews]);
      }
    }
  };

  updateWeeklyViews();

  return (
    <div className={style.container}>
      <Contents contents={contents} />
      <Divider />
      <Creators creators={creators} />
      <Divider />
      <WeeklyViews />
    </div>
  );
};

export default Admin;
