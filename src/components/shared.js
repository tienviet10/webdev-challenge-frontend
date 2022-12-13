import {
  PieChartOutlined,
  TableOutlined,
  UploadOutlined,
} from "@ant-design/icons";

// Get current date and time
export function getCurrentDate() {
  const current = new Date();
  const todayDate = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const currentTime =
    current.getHours() + current.getMinutes() + current.getSeconds();
  return [todayDate, currentTime];
}

// Backend
export const API = process.env.REACT_APP_API_LINK;

// Value for left navigation tabs
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

export const items = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Tables", "2", <TableOutlined />),
  getItem("Upload", "3", <UploadOutlined />),
];

//// Columns for uploaded tables
export const commonColumns = [
  {
    title: "date",
    dataIndex: "date",
    key: "date",
    editable: true,
  },
  {
    title: "category",
    dataIndex: "category",
    key: "category",
    editable: true,
  },
  {
    title: "lot title",
    dataIndex: "lottitle",
    key: "lottitle",
    editable: true,
  },
  {
    title: "lot location",
    key: "lotlocation",
    dataIndex: "lotlocation",
    editable: true,
  },
  {
    title: "lot condition",
    key: "lotcondition",
    dataIndex: "lotcondition",
    editable: true,
  },
  {
    title: "pre-tax amount",
    key: "pretaxamount",
    dataIndex: "pretaxamount",
    editable: true,
  },
  {
    title: "tax name",
    key: "taxname",
    dataIndex: "taxname",
    editable: true,
  },
  {
    title: "tax amount",
    key: "taxamount",
    dataIndex: "taxamount",
    editable: true,
  },
];

// Styling options for charts
export const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        padding: 15,
        font: {
          size: 20,
        },
      },
    },
  },
};

export const barChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Pre-tax amount per day Chart",
      font: {
        size: 20,
      },
    },
  },
};

export const commonStyles = {
  chartSkeleton: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  chartBox: {
    maxHeight: "620px",
  },
};
