import { Table } from "antd";
import React from "react";
import { columns } from "../shared";

const styles = {
  tablesStyle: {
    width: "100%",
  },
};

const TableComponent = ({ data, loading }) => {
  return (
    <>
      {data.length > 0 && (
        <Table
          loading={loading}
          columns={columns}
          dataSource={data}
          style={styles.tablesStyle}
        />
      )}
    </>
  );
};

export default TableComponent;
