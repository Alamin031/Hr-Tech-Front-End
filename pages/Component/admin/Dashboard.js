import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';

const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const Dashboard = () => {
  useEffect(() => {
    // ApexCharts options and config
    const options = {
      series: [
        {
          name: "Income",
          color: "#31C48D",
          data: ["1420", "1620", "1820", "1420", "1650", "2120"],
        },
        {
          name: "Expense",
          data: ["788", "810", "866", "788", "1100", "1200"],
          color: "#F05252",
        }
      ],
      // ... (rest of the ApexCharts options)
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("load", function () {
        if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
          const chart = new ApexCharts(document.getElementById("bar-chart"), options);
          chart.render();
        }
      });
    }
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      {/* ... (rest of the HTML code) */}
      <div id="bar-chart"></div>
    </div>
  );
};

export default Dashboard;
