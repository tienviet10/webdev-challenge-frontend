import React, { useState } from "react";
import TableComponent from "./TableComponent";
import UploadComponent from "./UploadComponent";

const styles = {
  tableContainer: {
    marginTop: "3rem",
  },
};

const UploadMainPage = ({ concatUploadedDataToCurrentTable }) => {
  const [data, setData] = useState([]);
  return (
    <>
      <UploadComponent
        setData={setData}
        data={data}
        concatUploadedDataToCurrentTable={concatUploadedDataToCurrentTable}
      />
      <div style={styles.tableContainer}>
        <TableComponent data={data} setNewData={setData} />
      </div>
    </>
  );
};

export default UploadMainPage;
