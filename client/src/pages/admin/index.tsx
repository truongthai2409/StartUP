import React, { useState } from "react";
import { ConfigProvider, Layout, Menu, MenuProps } from "antd";
import { Outlet, Link } from "react-router-dom";
import { FaUserAstronaut, FaChartBar } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { HiTemplate } from "react-icons/hi";
import { ThemeToggle } from "@components/mod/theme_toggle";
import { useAppSelector } from "@hooks/redux/use_app_dispatch";
import { RootState } from "@stores/index";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  link?: string,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    label: link ? <Link to={link}>{label}</Link> : label,
    children,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <FaChartBar />, "../admin/dashboard"),
  getItem("Customers", "2", <FaUserAstronaut />, "../admin/customers"),
  getItem("Templates", "3", <HiTemplate />, "../admin/templates"),
  getItem("Settings", "4", <IoSettings />, "../admin/settings"),
];

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const themeMode = useAppSelector((state: RootState) => state.theme.theme);

  return (
    <ConfigProvider
      theme={{
        token: {},
        components: {
          Layout: {
            colorBgTrigger: themeMode === "dark" ? "#1a1a1a" : "#ffe4e6",
            triggerColor: themeMode === "dark" ? "#ffe4e6" : "#1a1a1a",
          },
        },
      }}
    >
      <Layout
        style={{ minHeight: "100vh" }}
        className={
          themeMode === "dark"
            ? "bg-gray-900 text-white"
            : "bg-white text-black"
        }
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          width={200}
          style={{ background: themeMode === "dark" ? "#2f2f2f" : "#fff" }}
        >
          <div className="pt-6 text-2xl font-bold text-center text-pink-500">
            <Link to="/">
              {collapsed ? (
                <i className="fas fa-home" />
                // <IoIosHome className="justify-center text-3xl" />
              ) : (
                "Wedding Bliss"
              )}
            </Link>
          </div>
          <Menu
            style={{ paddingTop: "2rem" }}
            theme={themeMode === "dark" ? "dark" : "light"}
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={items}
          />
        </Sider>

        <Layout>
          <Header
            style={{
              background: themeMode === "dark" ? "#1c1c1c" : "#fff",
              padding: 0,
              color: themeMode === "dark" ? "#fff" : "#000",
            }}
          >
            <div className="flex justify-between my-4 text-xl font-semibold text-gray-500 mx-7">
              <h1>Admin Panel</h1>
              <ThemeToggle />
            </div>
          </Header>
          <Content style={{ margin: "16px" }}>
            <div
              style={{
                padding: 24,
                background: themeMode === "dark" ? "#333" : "#fff",
                minHeight: 360,
              }}
            >
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default Admin;
