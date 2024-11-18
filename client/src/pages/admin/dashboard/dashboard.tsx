import React, { useEffect, useRef } from 'react';
import { init as echartsInit } from 'echarts';

const Dashboard: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echartsInit(chartRef.current);

      const options = {
        title: {
          text: 'Tổng Doanh Thu',
          subtext: 'Theo tuần, quý, năm',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['Tuần', 'Quý', 'Năm'],
          top: '10%',
        },
        xAxis: {
          type: 'category',
          data: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], // Thay đổi để hiển thị dữ liệu theo nhu cầu
        },
        yAxis: {
          type: 'value',
          name: 'Doanh Thu',
        },
        series: [
          {
            name: 'Tuần',
            type: 'line',
            data: [500, 700, 800, 1200], // Dữ liệu mẫu cho tuần
          },
          {
            name: 'Quý',
            type: 'line',
            data: [2000, 2500, 3000, 4000], // Dữ liệu mẫu cho quý
          },
          {
            name: 'Năm',
            type: 'line',
            data: [10000, 15000, 20000, 30000], // Dữ liệu mẫu cho năm
          },
        ],
      };

      chart.setOption(options);

      return () => {
        chart.dispose(); // Dọn dẹp khi component unmount
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default Dashboard;
