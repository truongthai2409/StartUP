import React, { useState } from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import { FaUserAstronaut, FaChartBar } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  link?: string,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    label: link ? <Link to={link}>{label}</Link> : label,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <FaChartBar /> , '../admin/dashboard'),
  getItem('Customers', '2', <FaUserAstronaut />, '../admin/customers'),
  getItem('Templates', '3', <HiTemplate />, '../admin/templates'),
  getItem('Settings', '4', <IoSettings />, '../admin/settings'),
];

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={200}
        style={{ background: colorBgContainer }}
      >
        <div className="pt-6 text-2xl font-bold text-center text-pink-500">
          <Link to="/">Wedding Bliss</Link>
        </div>
        <Menu style={{ paddingTop: "2rem"}} theme="light" mode="inline" defaultSelectedKeys={["1"]} items={items} />
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <h1 style={{ fontSize: "20px", marginLeft: "20px" }}>Admin Panel</h1>
        </Header>
        <Content style={{ margin: "16px" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;
