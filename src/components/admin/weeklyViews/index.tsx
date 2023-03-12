import { getWeeklyViews } from '@/api/admin';
import { Heading, Spinner } from '@/components/common';
import { weeklyViews } from '@/types/admin';
import { generateRandomHex, hexToRGB } from '@/utils/color';
import { CATEGORIES } from '@/utils/constants/signup';
import { getKeyByValue } from '@/utils/object';
import { useQuery } from '@tanstack/react-query';
import * as style from './style.css';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const WeeklyViews = () => {
  const { data: weeklyViews } = useQuery<weeklyViews>(
    ['weeklyViews'],
    getWeeklyViews,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className={style.container}>
      <Heading level={2}>카테고리별 일주일 조회수</Heading>
      {!weeklyViews ? (
        <div className={style.spinnerWrapper}>
          <Spinner size="huge" />
        </div>
      ) : (
        Object.values(CATEGORIES)
          .map((_, i) =>
            weeklyViews.weeklyViewCounts
              .map(({ results }) => results)
              .map((v) => v[i])
          )
          .map((v) => {
            const borderColor = generateRandomHex();
            const backgroundColor = hexToRGB(borderColor, 0.7);

            return (
              <Line
                key={v[0].categoryName}
                options={options}
                data={{
                  labels: weeklyViews.weeklyViewCounts.map(({ date }) => date),
                  datasets: [
                    {
                      label: getKeyByValue(CATEGORIES, v[0].categoryName),
                      data: v.map((e) => e.viewCount),
                      borderColor,
                      backgroundColor,
                    },
                  ],
                }}
              />
            );
          })
      )}
    </div>
  );
};

export default WeeklyViews;
