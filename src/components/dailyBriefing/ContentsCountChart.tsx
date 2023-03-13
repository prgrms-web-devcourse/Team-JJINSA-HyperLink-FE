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

type contentsCountChartProps = {
  data: contentIncreaseData[];
};

const ContentsCountChart = ({ data }: contentsCountChartProps) => {
  const chartData = {
    labels: data.map(({ date }) => date),
    datasets: [
      {
        fill: true,
        label: '추가된 콘텐츠 수',
        data: data.map(({ contentIncrease }) => contentIncrease),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        tension: 0.5,
      },
    ],
  };

  const sortedData = data
    .slice()
    .sort((a, b) => b.contentIncrease - a.contentIncrease)
    .map(({ contentIncrease }) => contentIncrease);

  const max = sortedData[0];
  const min = sortedData[data.length - 1];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        min,
        max,
        ticks: {
          stepSize: max - min < 10 ? 1 : undefined,
        },
      },
    },
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
