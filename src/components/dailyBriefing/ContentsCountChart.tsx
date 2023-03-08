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
import { CONTENTS_COUNT } from '@/utils/constants/storage';
import { getItem, setItem } from '@/utils/storage';
import * as style from './style.css';

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
  standardDate: string;
  count: number;
};

const ContentsCountChart = ({
  standardDate,
  count,
}: contentsCountChartProps) => {
  const countData: contentsCountChartProps[] = getItem(CONTENTS_COUNT, []);

  const lastData = countData[countData.length - 1];

  if (!lastData || lastData.standardDate !== standardDate) {
    setItem(CONTENTS_COUNT, [
      ...countData,
      {
        standardDate,
        count,
      },
    ]);
  } else if (lastData.count !== count) {
    countData.pop();
    setItem(CONTENTS_COUNT, [
      ...countData,
      {
        standardDate,
        count,
      },
    ]);
  }

  const chartData = {
    labels: countData.slice(-7).map(({ standardDate }) => standardDate),
    datasets: [
      {
        fill: true,
        label: '누적 콘텐츠 수',
        data: countData.slice(-7).map(({ count }) => count),
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
