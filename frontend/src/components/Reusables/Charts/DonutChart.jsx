import Chart from "react-apexcharts";
import { useState } from "react";

export default function DonutChart() {
  const [state] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
        background: "white", // <-- Add this line
      },
      labels: [
        "Category 1",
        "Category 2",
        "Category 3",
        "Category 4",
        "Category 5",
      ],
      colors: [
        "#00bd35", // Category 1
        "#ff4848", // Category 2
        "#ddaa00", // Category 3
        "#fccc42", // Category 4
        "#ff5734", // Category 5
      ],
      legend: {
        position: "bottom",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div id="chart" className="w-full h-[300px]">
      <Chart
        options={state.options}
        series={state.series}
        type="donut"
        width="100%"
        height="100%"
      />
    </div>
  );
}
