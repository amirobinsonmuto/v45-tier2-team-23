"use client";

import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import data from "../../../public/meteoriteData.json";

function BarChart() {
  const [chartType, setChartType] = useState("year");

  // Bar chart - year
  const yearCounts = {};
  data.forEach((item) => {
    const year = item.year;
    yearCounts[year] = (yearCounts[year] || 0) + 1;
  });
  console.log(yearCounts);

  const chartOptions = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Strikes",
        },
      },
    },
  };

  const chartData = {
    labels: Object.keys(yearCounts),
    datasets: [
      {
        label: "Meteorite Strikes",
        data: Object.values(yearCounts),
      },
    ],
  };

  //Bar chart - composition (recclass)
  const recclassCounts = {};
  data.forEach((item) => {
    const recclass = item.recclass;
    recclassCounts[recclass] = (recclassCounts[recclass] || 0) + 1;
  });

  const chartOptionsRecclass = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Recclass",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Strikes",
        },
      },
    },
  };

  const chartDataRecclass = {
    labels: Object.keys(recclassCounts),
    datasets: [
      {
        label: "Meteorite Strikes",
        data: Object.values(recclassCounts),
      },
    ],
  };

  return (
    <div class="">
      <div className={`${chartType === "composition" ? "hidden" : ""}`}>
        <Bar data={chartData} options={chartOptions} />
      </div>
      <div className={`${chartType === "year" ? "hidden" : ""}`}>
        <Bar data={chartDataRecclass} options={chartOptionsRecclass} />
      </div>
      <form className="flex items-center justify-center gap-2">
        <label>
          <input
            type="radio"
            name="option"
            value="year"
            checked={chartType === "year"} // Check based on chartType value
            onClick={() => setChartType("year")}
          />
          Year
        </label>
        <label>
          <input
            type="radio"
            name="option"
            value="composition"
            checked={chartType === "composition"} // Check based on chartType value
            onClick={() => setChartType("composition")}
          />
          Composition (Recclass)
        </label>
      </form>
    </div>
  );
}

export default BarChart;
