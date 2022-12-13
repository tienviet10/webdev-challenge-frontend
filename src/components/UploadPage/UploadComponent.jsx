import {
  ClearOutlined,
  CloudUploadOutlined,
  InboxOutlined,
} from "@ant-design/icons";
import { Button, Upload } from "antd";
import useUploadPage from "./useUploadPage";

const { Dragger } = Upload;

// In-line styling for below components
const styles = {
  mainDisplayContainer: {
    width: "full",
    display: "flex",
    justifyContent: "center",
    margin: "20px 0px 20px 0px",
  },
  clearButtonStyle: {
    marginLeft: "10px",
  },
};

const UploadComponent = ({ setData, data }) => {
  const { props, fileList, loading, onSubmitTable, onClear } = useUploadPage(
    setData,
    data
  );

  return (
    <div>
      <Dragger {...props} fileList={fileList}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file here</p>
        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
      </Dragger>
      {data.length > 0 && (
        <div style={styles.mainDisplayContainer}>
          <Button
            type="primary"
            disabled={loading}
            loading={loading}
            icon={<CloudUploadOutlined />}
            onClick={onSubmitTable}
          >
            Upload To Database
          </Button>
          <Button
            style={styles.clearButtonStyle}
            danger
            type="text"
            disabled={loading}
            loading={loading}
            icon={<ClearOutlined />}
            onClick={onClear}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default UploadComponent;
