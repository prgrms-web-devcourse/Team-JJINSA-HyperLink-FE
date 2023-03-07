import { Heading } from '@/components/common';
import { views } from '@/types/admin';
import { generateRandomHex, hexToRGB } from '@/utils/color';
import { CATEGORIES } from '@/utils/constants/signup';
import { WEEKLY_VIEWS } from '@/utils/constants/storage';
import { getKeyByValue } from '@/utils/object';
import { getItem } from '@/utils/storage';
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
  const weeklyViews: views[] = getItem(WEEKLY_VIEWS, []);

  return (
    <div className={style.container}>
      <Heading level={2}>카테고리별 일주일 조회수</Heading>
      {Object.values(CATEGORIES)
        .map((_, i) =>
          weeklyViews
            .map((dailyViews) => dailyViews.oneDayView)
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
                labels: weeklyViews.map(
                  (currentCategoryView) =>
                    currentCategoryView.createdDate.split('T')[0]
                ),
                datasets: [
                  {
                    label: getKeyByValue(CATEGORIES, v[0].categoryName),
                    data: v.map((e) => e.views),
                    borderColor,
                    backgroundColor,
                  },
                ],
              }}
            />
          );
        })}
    </div>
  );
};

export default WeeklyViews;
