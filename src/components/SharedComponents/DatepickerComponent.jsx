import { DatePicker, Space, Typography } from "antd";
import dayjs from "dayjs";
import React from "react";

const dateFormat = "DD/MM/YYYY";

const styles = {
  datePickerStyle: {
    display: "flex",
  },
  textStyle: {
    margin: 0,
  },
};

const DatepickerComponent = ({ dateDisplay, onChooseDate, todayDate }) => {
  return (
    <Space style={styles.datePickerStyle}>
      <Typography.Title level={3} style={styles.textStyle}>
        Choose date: &nbsp;&nbsp;
      </Typography.Title>
      <DatePicker
        value={dayjs(dateDisplay, dateFormat)}
        onChange={onChooseDate}
        defaultValue={dayjs(todayDate, dateFormat)}
        format={dateFormat}
      />
    </Space>
  );
};

export default DatepickerComponent;
