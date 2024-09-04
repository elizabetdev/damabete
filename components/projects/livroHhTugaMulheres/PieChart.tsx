"use client";
import { livroHhTugaData } from "@/data/livroHhTugaData";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ScatterController,
  LinearScale,
  PointElement,
} from "chart.js";

// Register the necessary components for Chart.js
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  Title,
  ScatterController,
  LinearScale,
  PointElement
);

export const PieChart = () => {
  // Process the data to count male and female rappers
  const femaleCount = livroHhTugaData.filter(
    (rapper) => rapper.gender === "female"
  ).length;
  const maleCount = livroHhTugaData.length - femaleCount;

  // Prepare the data for the Pie chart
  const pieData = {
    labels: [`Female Rappers: ${femaleCount}`, `Male Rappers: ${maleCount}`],
    datasets: [
      {
        label: "Rappers by Gender",
        data: [femaleCount, maleCount],
        backgroundColor: ["#ec4899", "#3b82f6"], // Tailwind CSS pink-500 and blue-500
        hoverBackgroundColor: ["#db2777", "#2563eb"], // Tailwind CSS pink-600 and blue-600
        borderWidth: 1,
      },
    ],
  };

  // Configure the options for the Pie chart
  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#fff", // Tailwind CSS gray-700
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const value = tooltipItem.raw;
            const total = femaleCount + maleCount;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${tooltipItem.label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-sm shadow-lg rounded-lg p-4 m-auto">
      <Pie data={pieData} options={pieOptions as any} />
    </div>
  );
};
