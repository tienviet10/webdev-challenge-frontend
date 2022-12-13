import { Layout } from "antd";
import React, { useState } from "react";
import MainDisplayComponent from "./components/MainDisplayPage/MainDisplayComponent";
import NavbarComponent from "./components/Navbar/NavbarComponent";

const { Header, Footer } = Layout;

// Layout styling
const styles = {
  mainLayout: {
    minHeight: "100vh",
  },
  headerStyle: {
    padding: 0,
  },
  footerStyle: {
    textAlign: "center",
  },
};

function App() {
  const [openedTab, setOpenedTab] = useState("1");

  return (
    <Layout style={styles.mainLayout}>
      <NavbarComponent setOpenedTab={setOpenedTab} />
      <Layout>
        <Header style={styles.headerStyle} />
        <MainDisplayComponent openedTab={openedTab} />
        <Footer style={styles.footerStyle}>
          Copyright &copy;2022. All Rights Reserved
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
