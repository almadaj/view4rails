import React from 'react';
import { Bar } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const PerformanceChart: React.FC = () => {
  const data: ChartData<'bar'> = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
    datasets: [
      {
        label: 'Desempenho',
        data: [10, 20, 15, 25, 30],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Configurações do gráfico
  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gráfico de Desempenho',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default PerformanceChart;
