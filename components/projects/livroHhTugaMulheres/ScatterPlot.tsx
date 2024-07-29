"use client";
import { livroHhTugaData } from "@/data/livroHhTugaData";
import { Pie, Scatter } from "react-chartjs-2";
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

export const ScatterPlot = () => {
  const scatterPlotData = {
    datasets: [
      {
        label: "Rappers Femininas",
        data: livroHhTugaData
          .filter((r) => r.gender === "female")
          .map((r) => ({
            x: r.year,
            y: Math.random() * 100, // Atributo Y fictício para a visualização
            label: r.name,
          })),
        backgroundColor: "#ec4899", // Tailwind CSS pink-500
        borderColor: "#ec4899", // Tailwind CSS pink-500
        borderWidth: 1,
        pointRadius: 5,
      },
      {
        label: "Rappers Masculinos",
        data: livroHhTugaData
          .filter((r) => r.gender === "male")
          .map((r) => ({
            x: r.year,
            y: Math.random() * 100, // Atributo Y fictício para a visualização
            label: r.name,
          })),
        backgroundColor: "#3b82f6", // Tailwind CSS blue-500
        borderColor: "#3b82f6", // Tailwind CSS blue-500
        borderWidth: 1,
        pointRadius: 5,
      },
    ],
  };

  const scatterPlotOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#ffffff",
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => {
            const rapperName = tooltipItem.raw.label || "Desconhecido"; // Nome do rapper
            const year = tooltipItem.raw.x;
            return `${rapperName} (Ano: ${year})`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          color: "#ffffff",
          display: true,
          text: "Ano",
        },
        ticks: {
          color: "#ffffff",
          callback: (value: string) => value.toString(), // Formata o eixo X para mostrar anos como números inteiros
        },
      },
      y: {
        title: {
          color: "#ffffff",
          display: true,
          text: "Valor Y",
        },
      },
    },
  };

  return <Scatter data={scatterPlotData} options={scatterPlotOptions as any} />;
};
