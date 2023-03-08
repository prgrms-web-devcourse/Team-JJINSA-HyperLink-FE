import {
  getAllCreators,
  getDeactivatedContents,
  getYesterdayViews,
} from '@/api/admin';
import { Contents, Creators, WeeklyViews } from '@/components/admin';
import { Divider, Spinner } from '@/components/common';
import { contents, creators, views } from '@/types/admin';
import { WEEKLY_VIEWS } from '@/utils/constants/storage';
import { isSameDate } from '@/utils/date';
import { getItem, setItem } from '@/utils/storage';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import * as style from './style.css';

const TABLE_SIZE = 10;

const Admin = () => {
  const queryClient = useQueryClient();
  const [creatorsPage, setCreatorsPage] = useState(0);
  const [contentsPage, setContentsPage] = useState(0);

  const { data: contents, isPreviousData: isPrevContents } = useQuery<contents>(
    ['deactivatedContents', contentsPage, TABLE_SIZE],
    () => getDeactivatedContents(contentsPage, TABLE_SIZE),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const { data: creators, isPreviousData: isPrevCreators } = useQuery<creators>(
    ['allCreators', creatorsPage, TABLE_SIZE],
    () => getAllCreators(creatorsPage, TABLE_SIZE),
    {
      keepPreviousData: true,
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

  useEffect(() => {
    if (!isPrevContents && contents)
      queryClient.prefetchQuery(
        ['deactivatedContents', contentsPage, TABLE_SIZE],
        () => getDeactivatedContents(contentsPage, TABLE_SIZE)
      );
  }, [contents, isPrevContents]);

  useEffect(() => {
    if (!isPrevCreators && creators)
      queryClient.prefetchQuery(['allCreators', creatorsPage, TABLE_SIZE], () =>
        getAllCreators(creatorsPage, TABLE_SIZE)
      );
  }, [creators, isPrevCreators]);

  if (!contents || !creators || !yesterdayViews) {
    return <Spinner size="huge" />;
  }

  const updateWeeklyViews = () => {
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

  updateWeeklyViews();

  return (
    <div className={style.container}>
      <Contents
        {...contents}
        onPrevClick={() => setContentsPage(contentsPage - 1)}
        onNextClick={() => setContentsPage(contentsPage + 1)}
      />
      <Divider />
      <Creators
        {...creators}
        onPrevClick={() => setCreatorsPage(creatorsPage - 1)}
        onNextClick={() => setCreatorsPage(creatorsPage + 1)}
      />
      <Divider />
      <WeeklyViews />
    </div>
  );
};

export default Admin;
