import React from "react";
import DatepickerComponent from "../SharedComponents/DatepickerComponent";
import ChartsComponent from "./ChartsComponent";

const Dashboard = ({
  onChooseDate,
  todayDate,
  loading,
  dataAccordingToDate,
  dateDisplay,
}) => {
  return (
    <>
      <DatepickerComponent
        onChooseDate={onChooseDate}
        todayDate={todayDate}
        dateDisplay={dateDisplay}
      />
      <ChartsComponent
        loading={loading}
        dataAccordingToDate={dataAccordingToDate}
      />
    </>
  );
};

export default Dashboard;
