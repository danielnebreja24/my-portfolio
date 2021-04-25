import React from "react";
import { Menu, Button, Layout, Dropdown, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import "./dashboard.css";

import MessageTable from "./messageTable";

import Profile from "../../images/avatar1.png";
import Logo from "../../images/dlb-logo7.png";

const { Header, Sider, Content } = Layout;

export default class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { collapsed: true };
  }

  componentDidMount() {
    if (localStorage.getItem("loglog") !== "laLyka") {
      this.props.history.push("/lognow");
    }
  }

  //   toggleCollapsed = () => {
  //     this.setState({
  //       collapsed: !this.state.collapsed,
  //     });
  //   };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/lognow");
  };

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1" icon={<UserOutlined />}>
          View profile
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          Settings
        </Menu.Item>
        <Menu.Item
          key="3"
          icon={<LogoutOutlined />}
          onClick={this.handleLogout}
        >
          Logout
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="mainDiv-dash">
        <div className="mainDiv-side">
          <Layout style={{ minHeight: "100vh" }}>
            <Sider
              width="170"
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <div className="logo">
                <img
                  src={Logo}
                  alt="Logo"
                  onClick={() => this.props.history.push("/")}
                />
              </div>
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                  Messages
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                  nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                  nav 3
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background">
                <Button type="primary" onClick={this.toggle}>
                  {React.createElement(
                    this.state.collapsed
                      ? MenuUnfoldOutlined
                      : MenuFoldOutlined,
                    {
                      className: "trigger",
                    }
                  )}
                </Button>
                <Dropdown overlay={menu}>
                  <Button type="primary">
                    <Avatar size={25} src={Profile} />
                    &nbsp;&nbsp;Mr. Wick <DownOutlined />
                  </Button>
                </Dropdown>
              </Header>
              <Content className="site-layout-content">
                <div className="contentBody">
                  <MessageTable />
                </div>
                <div className="contentFoot">Daniel Nebreja &copy; 2021</div>
              </Content>
            </Layout>
          </Layout>
        </div>
      </div>
    );
  }
}
