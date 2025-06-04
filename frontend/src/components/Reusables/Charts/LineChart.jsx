import { useState } from "react";
import Chart from "react-apexcharts";
export default function LineChart() {
  const [state] = useState({
    series: [
      {
        name: "Network",
        data: [
          { x: "Dec 24 2017", y: 44 },
          { x: "Dec 25 2017", y: 31 },
          { x: "Dec 26 2017", y: 38 },
          { x: "Dec 28 2017", y: 32 },
          { x: "Dec 29 2017", y: 55 },
          { x: "Dec 30 2017", y: 51 },
          { x: "Dec 31 2017", y: 67 },
          { x: "Jan 01 2018", y: 22 },
          { x: "Jan 02 2018", y: 34 },
          { x: "Jan 05 2018", y: 11 },
          { x: "Jan 06 2018", y: 4 },
          { x: "Jan 07 2018", y: 15 },
          { x: "Jan 09 2018", y: 9 },
          { x: "Jan 10 2018", y: 34 },
          { x: "Jan 13 2018", y: 13 },
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        height: 350,
        animations: { enabled: false },
        zoom: { enabled: false },
      },
      colors: ["#ff5734"], // Set line color
      dataLabels: { enabled: false },
      stroke: { curve: "straight", colors: ["#ff5734"] }, // Set line color
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "vertical",
          shadeIntensity: 0.7,
          gradientToColors: ["#ff5734"], // Set shadow color
          inverseColors: false,
          opacityFrom: 0.7,
          opacityTo: 0.05,
          stops: [0, 100],
        },
      },
      markers: {
        size: 5,
        colors: ["#ff5734"], // Set marker color
        hover: { size: 9 },
      },
      title: { text: "Network Monitoring" },
      tooltip: {
        intersect: true,
        shared: false,
      },
      theme: { palette: "palette1" },
      xaxis: { type: "datetime" },
      yaxis: {
        title: { text: "Bytes Received" },
      },
    },
  });

  return (
    <div id="chart" className="w-full h-[300px]">
      <Chart
        options={state.options}
        series={state.series}
        type="area"
        width="100%"
        height="100%"
      />
    </div>
  );
}
