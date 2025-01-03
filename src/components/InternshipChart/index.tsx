/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { ChartData } from 'chart.js';
import { ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import internshipService from 'src/services/internshipService';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);

const PerformanceChart = () => {
  const [monthlyCounts, setMonthlyCounts] = useState<number[]>([]);

  const getLastMonths = () => {
    const today = new Date();
    const months = [];
    for (let i = 4; i >= 0; i--) {
      const month = new Date(today);
      month.setMonth(today.getMonth() - i);
      months.push(
        month
          .toLocaleString('pt-BR', { month: 'long' })
          .charAt(0)
          .toUpperCase() +
          month.toLocaleString('pt-BR', { month: 'long' }).slice(1),
      );
    }
    return months;
  };

  // useEffect(() => {
  //   const fetchChartData = async () => {
  //     try {
  //       const res = await internshipService.getInternships();
  //       console.log('API Response:', res);
  //       const months = getLastMonths();

  //       const counts = months.map((month) => {
  //         const countsForMonth = res.filter((item: any) => {
  //           if (!item.start_date) return false;
  //           const itemDate = new Date(item.start_date);
  //           const itemMonth = itemDate.toLocaleString('pt-BR', {
  //             month: 'long',
  //           });
  //           return itemMonth.toLowerCase() === month.toLowerCase();
  //         });
  //         return countsForMonth.length;
  //       });

  //       console.log('Monthly Counts:', counts);
  //       setMonthlyCounts(counts);
  //     } catch (error) {
  //       console.error('Error in fetchChartData:', error);
  //     }
  //   };

  //   fetchChartData();
  // }, []);
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const res = await internshipService.getInternships();
        console.log('API Response:', res);
        const today = new Date();

        const months = getLastMonths().map((month, index) => {
          const monthDate = new Date(today);
          monthDate.setMonth(today.getMonth() - (4 - index));
          return { name: month, year: monthDate.getFullYear() };
        });

        const counts = months.map(({ name, year }) => {
          const countsForMonth = res.filter((item: any) => {
            if (!item.start_date) return false;
            const itemDate = new Date(item.start_date);
            const itemMonth = itemDate.toLocaleString('pt-BR', {
              month: 'long',
            });
            return (
              itemMonth.toLowerCase() === name.toLowerCase() &&
              itemDate.getFullYear() === year
            );
          });
          return countsForMonth.length;
        });

        console.log('Monthly Counts:', counts);
        setMonthlyCounts(counts);
      } catch (error) {
        console.error('Error in fetchChartData:', error);
      }
    };

    fetchChartData();
  }, []);

  const data: ChartData<'line'> = {
    labels: getLastMonths(),
    datasets: [
      {
        label: 'Novos Estágios',
        data: monthlyCounts,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Gráfico de Desempenho - Últimos Meses',
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
      },
      y: {
        title: {
          display: false,
        },
        ticks: {
          callback: function (value: number | string) {
            const numericValue =
              typeof value === 'string' ? parseFloat(value) : value;
            return Number.isInteger(numericValue)
              ? numericValue
              : Math.floor(numericValue);
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default PerformanceChart;
