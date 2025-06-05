import Chart from "react-apexcharts";
import { useState } from "react";

export default function BarChart() {
  const [state, setState] = useState({
    series: [
      {
        data: [100],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 500,
        toolbar: { show: false },
      },
      colors: ["#00bd35"], // Green color for the bar
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Onboarding"],
      },
    },
  });

  return (
    <div>
      <div id="chart" className="w-[100%]">
        <Chart
          options={state.options}
          series={state.series}
          type="bar"
          width="500px"
          height="100%"
        />
      </div>
    </div>
  );
}
