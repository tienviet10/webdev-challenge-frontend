import React, { useState } from "react";
import TableComponent from "../SharedComponents/TableComponent";
import UploadComponent from "./UploadComponent";

const styles = {
  tableContainer: {
    marginTop: "3rem",
  },
};

const UploadMainPage = () => {
  const [data, setData] = useState([]);
  return (
    <>
      <UploadComponent setData={setData} data={data} />
      <div style={styles.tableContainer}>
        <TableComponent data={data} />
      </div>
    </>
  );
};

export default UploadMainPage;
