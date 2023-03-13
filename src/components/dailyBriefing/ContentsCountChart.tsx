import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Card, Heading } from '@/components/common';
import * as style from './style.css';
import { contentIncreaseData } from '@/types/dailyBriefing';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

type contentsCountChartProps = {
  data: contentIncreaseData[];
};

const ContentsCountChart = ({ data }: contentsCountChartProps) => {
  const chartData = {
    labels: data.map(({ date }) => date),
    datasets: [
      {
        fill: true,
        label: '누적 콘텐츠 수',
        data: data.map(({ contentIncrease }) => contentIncrease),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.5,
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
        <Heading level={6}>콘텐츠 수</Heading>
      </div>
      <div className={style.chart}>
        <Line options={options} data={chartData} />
      </div>
    </Card>
  );
};

export default ContentsCountChart;
