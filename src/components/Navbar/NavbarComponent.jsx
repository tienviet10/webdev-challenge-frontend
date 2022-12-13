import { Layout, Menu } from "antd";
import React, { useState } from "react";
import logo1 from "../../assets/logo.webp";
import logo2 from "../../assets/v.webp";
import { items } from "../shared";
const { Sider } = Layout;

const styles = {
  logoStyle: {
    height: 32,
    margin: 16,
    background: "transparent",
  },
};

const NavbarComponent = ({ setOpenedTab }) => {
  const [collapsed, setCollapsed] = useState(false);

  const changeNavTab = (e) => {
    setOpenedTab(e.key);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      {collapsed ? (
        <img style={styles.logoStyle} src={logo2} alt="Viet Logo" />
      ) : (
        <img style={styles.logoStyle} src={logo1} alt="Viet Logo" />
      )}
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
        onClick={changeNavTab}
      />
    </Sider>
  );
};

export default NavbarComponent;
