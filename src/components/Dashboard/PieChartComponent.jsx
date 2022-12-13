import React from "react";

import { Result } from "antd";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import { commonStyles, pieChartOptions } from "../shared";
import LoadingComponent from "../SharedComponents/LoadingComponent";

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
  barChartBox: {
    maxHeight: "620px",
  },
  backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(255, 206, 86, 0.2)",
    "rgba(75, 192, 192, 0.2)",
    "rgba(153, 102, 255, 0.2)",
    "rgba(255, 159, 64, 0.2)",
  ],
  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
  ],
};

const PieChartComponent = ({ data, loading }) => {
  const labels = Object.keys(data);
  const dataChart = Object.values(data);

  return (
    <div style={commonStyles.chartSkeleton}>
      {loading ? (
        <LoadingComponent />
      ) : dataChart.length > 0 ? (
        <Pie
          options={pieChartOptions}
          data={{
            labels,
            datasets: [
              {
                data: dataChart,
                backgroundColor: styles.backgroundColor,
                borderColor: styles.borderColor,
                borderWidth: 1,
              },
            ],
          }}
          style={commonStyles.chartBox}
        />
      ) : (
        <Result
          status="404"
          title="No Chart"
          subTitle="Please upload data in the Upload tab!"
        />
      )}
    </div>
  );
};

export default PieChartComponent;
