import { Result } from "antd";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { barChartOptions, commonStyles } from "../shared";
import LoadingComponent from "../SharedComponents/LoadingComponent";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const styles = {
  barChartBox: {
    maxHeight: "620px",
  },
  backgroundColor: "rgba(255, 99, 132, 0.5)",
};

const BarChartComponent = ({ perDayData, loading }) => {
  const labels = Object.keys(perDayData);
  const dataChart = Object.values(perDayData);

  return (
    <div style={commonStyles.chartSkeleton}>
      {loading ? (
        <LoadingComponent />
      ) : dataChart.length > 0 ? (
        <Bar
          options={barChartOptions}
          data={{
            labels,
            datasets: [
              {
                label: "Pre-tax amount",
                data: dataChart,
                backgroundColor: styles.backgroundColor,
              },
            ],
          }}
          style={commonStyles.chartBox}
        />
      ) : (
        <Result
          status="404"
          title="No Chart"
          subTitle="Please upload data using the Upload tab!"
        />
      )}
    </div>
  );
};

export default BarChartComponent;
