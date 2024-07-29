import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { livroHhTugaData } from "@/data/livroHhTugaData";
import { getFemaleRappersByYear } from "@/utils/getFemaleRappersByYear";

// Registra os componentes necessários para o Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale
);

export const LineChart: React.FC = () => {
  const femaleRappersByYear = getFemaleRappersByYear(livroHhTugaData);

  const labels = Object.keys(femaleRappersByYear).sort(
    (a, b) => parseInt(a) - parseInt(b)
  );
  const data = labels.map((year) => femaleRappersByYear[parseInt(year)]);

  const lineChartData = {
    labels,
    datasets: [
      {
        label: "Número de Rappers Femininas",
        data,
        borderColor: "#ec4899", // Tailwind CSS pink-500
        backgroundColor: "rgba(236, 72, 153, 0.2)", // Tailwind CSS pink-500 with transparency
        borderWidth: 2,
        pointBackgroundColor: "#ec4899",
        pointRadius: 5,
        fill: true,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff", // Define a cor das legendas como branca
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const year = tooltipItem.label;
            const count = tooltipItem.raw as number;
            return `Ano: ${year}, Rappers Femininas: ${count}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ano",
          color: "#ffffff", // Define a cor do título do eixo X como branca
        },
        ticks: {
          color: "#ffffff", // Define a cor dos ticks do eixo X como branca
          autoSkip: false, // Garante que todos os ticks sejam exibidos
          stepSize: 1, // Define o intervalo dos ticks
        },
        grid: {
          drawOnChartArea: false, // Opcional: remove a grade para um visual mais limpo
        },
      },
      y: {
        title: {
          display: true,
          text: "Número de Rappers Femininas",
          color: "#ffffff", // Define a cor do título do eixo Y como branca
        },
        ticks: {
          color: "#ffffff", // Define a cor dos ticks do eixo Y como branca
          callback: (value: string) => value.toString(),
          stepSize: 1,
        },
      },
    },
  };

  return <Line data={lineChartData} options={lineChartOptions as any} />;
};
