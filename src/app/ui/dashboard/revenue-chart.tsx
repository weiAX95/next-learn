// app/ui/dashboard/revenue-chart.tsx
'use client';

import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// 注册 Chart.js 组件
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function RevenueChart({ 
  revenue 
}: { 
  revenue: Array<{ month: string; revenue: number; }> 
}) {
  const data = {
    labels: revenue.map(item => item.month),
    datasets: [
      {
        label: 'Revenue',
        data: revenue.map(item => item.revenue),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Revenue',
      },
    },
  };

  return (
    <div className="w-full bg-white p-6 rounded-xl shadow-sm">
      test
      <Bar data={data} options={options} />
    </div>
  );
}