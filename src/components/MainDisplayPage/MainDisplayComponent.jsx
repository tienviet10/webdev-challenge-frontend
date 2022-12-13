import { Breadcrumb, Layout } from "antd";
import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import TablesMain from "../Tables/TablesMain";
import UploadMainPage from "../UploadPage/UploadMainPage";
import { useManageMainPageState } from "./useManageMainPageState";
const { Content } = Layout;

const styles = {
  contentBox: {
    margin: "0 16px",
  },
  breadCrumbContainer: {
    margin: "16px 0",
  },
  mainDisplayContainer: {
    padding: 24,
    minHeight: 600,
  },
};

const MainDisplayComponent = ({ openedTab }) => {
  const { dateDisplay, onChooseDate, todayDate, loading, dataAccordingToDate } =
    useManageMainPageState();

  return (
    <Content style={styles.contentBox}>
      <Breadcrumb style={styles.breadCrumbContainer}>
        <Breadcrumb.Item>NRI</Breadcrumb.Item>
        <Breadcrumb.Item>
          {openedTab === "1"
            ? "Dashboard"
            : openedTab === "3"
            ? "Upload"
            : "Tables"}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div style={styles.mainDisplayContainer}>
        {openedTab === "1" ? (
          <Dashboard
            dateDisplay={dateDisplay}
            onChooseDate={onChooseDate}
            todayDate={todayDate}
            loading={loading}
            dataAccordingToDate={dataAccordingToDate}
          />
        ) : openedTab === "3" ? (
          <UploadMainPage />
        ) : (
          <TablesMain
            dateDisplay={dateDisplay}
            onChooseDate={onChooseDate}
            todayDate={todayDate}
            loading={loading}
            dataAccordingToDate={dataAccordingToDate}
          />
        )}
      </div>
    </Content>
  );
};

export default MainDisplayComponent;
