import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, Heading } from '@/components/common';
import { CATEGORIES } from '@/utils/constants/categories';
import { dataByCategorys } from '@/types/dailyBriefing';
import * as style from './style.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
};

const backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
];

const borderColor = [
  'rgba(255, 99, 132, 1)',
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
];

type categoryChartProps = {
  standardTime: string;
  data: dataByCategorys[];
};

const CategoryChart = ({ standardTime, data }: categoryChartProps) => {
  const chartData = {
    labels: data.map(({ categoryName }) => CATEGORIES[categoryName]),
    datasets: [
      {
        data: data.map(({ count }) => count),
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Card
      type="default"
      color="#F7F9FB"
      style={{ width: '100%', minWidth: '30rem' }}
    >
      <div className={style.title}>
        <Heading level={6}>관심 카테고리별 회원 수</Heading>
        <span className={style.standardTime}>{standardTime}시 기준</span>
      </div>
      <div className={style.chart}>
        <Doughnut options={options} data={chartData} />
      </div>
    </Card>
  );
};

export default CategoryChart;
