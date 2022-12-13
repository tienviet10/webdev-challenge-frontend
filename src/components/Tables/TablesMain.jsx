import { Button, Popconfirm, Result, Space } from "antd";
import React from "react";
import { CSVLink } from "react-csv";
import DatepickerComponent from "../SharedComponents/DatepickerComponent";
import LoadingComponent from "../SharedComponents/LoadingComponent";
import NoEditableTableComponent from "./NoEditableTableComponent";

const styles = {
  datePickerContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  tablesContainerStyle: {
    marginTop: "3rem",
  },
  exportTextColor: {
    color: "#fff",
  },
};

const TablesMain = ({
  dateDisplay,
  onChooseDate,
  todayDate,
  loading,
  dataAccordingToDate,
  deleteTableAccordingToDate,
}) => {
  const dataToDownload = dataAccordingToDate.map((item) => {
    const { key, id, posteddate, ...rest } = item;
    return rest;
  });

  return (
    <>
      <div style={styles.datePickerContainer}>
        <DatepickerComponent
          onChooseDate={onChooseDate}
          todayDate={todayDate}
          dateDisplay={dateDisplay}
        />
        <Space>
          <Popconfirm
            title="Do you want to delete the whole table?"
            onConfirm={() => deleteTableAccordingToDate()}
          >
            <Button danger>Delete Table</Button>
          </Popconfirm>
          {/* <Button danger>Delete Table</Button> */}
          <Button type="primary">
            <CSVLink style={styles.exportTextColor} data={dataToDownload}>
              Export
            </CSVLink>
          </Button>
        </Space>
      </div>
      <div style={styles.tablesContainerStyle}>
        {loading ? (
          <LoadingComponent />
        ) : dataAccordingToDate.length > 0 ? (
          <NoEditableTableComponent
            data={dataAccordingToDate}
            loading={loading}
          />
        ) : (
          <Result
            status="404"
            title="No Table"
            subTitle="please upload data using the Upload tab!"
          />
        )}
      </div>
    </>
  );
};

export default TablesMain;
