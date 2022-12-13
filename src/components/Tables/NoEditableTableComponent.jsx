import { Table } from "antd";
import React from "react";
import { commonColumns } from "../shared";

const styles = {
  tablesStyle: {
    width: "100%",
  },
};

const NoEditableTableComponent = ({ data, loading }) => {
  return (
    <>
      {data.length > 0 && (
        <Table
          loading={loading}
          columns={commonColumns}
          dataSource={data}
          style={styles.tablesStyle}
        />
      )}
    </>
  );
};

export default NoEditableTableComponent;
