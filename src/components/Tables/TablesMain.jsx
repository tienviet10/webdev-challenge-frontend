import { Button, Result } from "antd";
import React from "react";
import DatepickerComponent from "../SharedComponents/DatepickerComponent";
import LoadingComponent from "../SharedComponents/LoadingComponent";
import TableComponent from "../SharedComponents/TableComponent";

const styles = {
  datePickerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  tablesContainerStyle: {
    marginTop: "3rem",
  },
};

const TablesMain = ({
  dateDisplay,
  onChooseDate,
  todayDate,
  loading,
  dataAccordingToDate,
}) => {
  return (
    <>
      <div style={styles.datePickerContainer}>
        <DatepickerComponent
          onChooseDate={onChooseDate}
          todayDate={todayDate}
          dateDisplay={dateDisplay}
        />
        <Button type="primary">Update Table</Button>
      </div>
      <div style={styles.tablesContainerStyle}>
        {loading ? (
          <LoadingComponent />
        ) : dataAccordingToDate.length > 0 ? (
          <TableComponent data={dataAccordingToDate} loading={loading} />
        ) : (
          <Result
            status="404"
            title="No Table"
            subTitle="Sorry, no data to display!"
          />
        )}
      </div>
    </>
  );
};

export default TablesMain;
