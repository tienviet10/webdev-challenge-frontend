import { Tabs } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import BarChartComponent from "./BarChartComponent";
import PieChartComponent from "./PieChartComponent";

const styles = {
  tabContainer: {
    marginTop: "1rem",
  },
};

const ChartsComponent = ({ loading, dataAccordingToDate }) => {
  const [perDayData, setPerDayData] = useState({});
  const [perCategoryData, setPerCategoryData] = useState({});
  const [perConditionData, setPerConditionData] = useState({});

  const calculateData = useCallback((dataAccordingToDate) => {
    let hashMapPerDayData = {};
    let hashMapPerCategoryData = {};
    let hashMapPerConditionData = {};

    // Calculate total pre tax amount per day, per category, or per condition
    for (let i = 0; i < dataAccordingToDate.length; i++) {
      hashMapPerDayData[dataAccordingToDate[i].date] = hashMapPerDayData[
        dataAccordingToDate[i].date
      ]
        ? hashMapPerDayData[dataAccordingToDate[i].date] +
          parseFloat(dataAccordingToDate[i].pretaxamount)
        : parseFloat(dataAccordingToDate[i].pretaxamount);

      hashMapPerCategoryData[dataAccordingToDate[i].category] =
        hashMapPerCategoryData[dataAccordingToDate[i].category]
          ? hashMapPerCategoryData[dataAccordingToDate[i].category] +
            parseFloat(dataAccordingToDate[i].pretaxamount)
          : parseFloat(dataAccordingToDate[i].pretaxamount);

      hashMapPerConditionData[dataAccordingToDate[i].lotcondition] =
        hashMapPerConditionData[dataAccordingToDate[i].lotcondition]
          ? hashMapPerConditionData[dataAccordingToDate[i].lotcondition] +
            parseFloat(dataAccordingToDate[i].pretaxamount)
          : parseFloat(dataAccordingToDate[i].pretaxamount);
    }
    setPerDayData(hashMapPerDayData);
    setPerCategoryData(hashMapPerCategoryData);
    setPerConditionData(hashMapPerConditionData);
  }, []);

  useEffect(() => {
    calculateData(dataAccordingToDate);
  }, [calculateData, dataAccordingToDate]);

  const items = [
    {
      label: "Per Day",
      key: 1,
      children: <BarChartComponent perDayData={perDayData} loading={loading} />,
    },
    {
      label: "Per Category",
      key: 2,
      children: <PieChartComponent data={perCategoryData} loading={loading} />,
    },
    {
      label: "Per Condition",
      key: 3,
      children: <PieChartComponent data={perConditionData} loading={loading} />,
    },
  ];

  return (
    <div style={styles.tabContainer}>
      <Tabs type="card" items={items} centered />
    </div>
  );
};

export default ChartsComponent;
