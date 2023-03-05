import { Card, Heading } from '../common';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import * as style from './style.css';
import { CATEGORY } from '@/utils/constants/category';

ChartJS.register(ArcElement, Tooltip, Legend);

const VIEW_BY_CATEGORYS = {
  views: [
    {
      categoryName: 'develop',
      count: 983,
    },
    {
      categoryName: 'beauty',
      count: 832,
    },
    {
      categoryName: 'finance',
      count: 425,
    },
  ],
  standardTime: '2023.03.04 15PM',
};

export const options = {
  responsive: true,
};

export const data = {
  labels: VIEW_BY_CATEGORYS.views.map(
    ({ categoryName }) => CATEGORY[categoryName]
  ),
  datasets: [
    {
      data: VIEW_BY_CATEGORYS.views.map(({ count }) => count),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const CategoryChart = () => {
  return (
    <Card
      type="default"
      color="#F7F9FB"
      style={{ width: '100%', minWidth: '30rem' }}
    >
      <div className={style.title}>
        <Heading level={6}>관심 카테고리별 회원 수</Heading>
        <span className={style.standardTime}>
          {VIEW_BY_CATEGORYS.standardTime}
        </span>
      </div>
      <div className={style.chart}>
        <Doughnut options={options} data={data} />
      </div>
    </Card>
  );
};

export default CategoryChart;
