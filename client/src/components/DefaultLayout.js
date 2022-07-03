import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  UserOutlined,
  CopyOutlined,
  UnorderedListOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "../resources/layout.css";
import { Link, useNavigate } from "react-router-dom";
import {useSelector} from 'react-redux';
import { useEffect } from "react";


const { Header, Sider, Content } = Layout;

const DefaultLayout = (props ) => {

  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {cartItems, loading} = useSelector(state => state.reducer)
  const toggle = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])


  return (
    <Layout>
      {loading && (
        <div className="spinner">
        <div class="spinner-border" role="status">
      </div>
      </div>
      )}

      <Sider
        className="main_layout_div"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <h3>TK MART</h3>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={window.location.pathname}
        >
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to="/home"></Link>Home
          </Menu.Item>

          <Menu.Item key="/bills" icon={<CopyOutlined />}>
            <Link to="/bills"></Link>'Bills
          </Menu.Item>

          <Menu.Item key="/items" icon={<UnorderedListOutlined />}>
            <Link to="/items"></Link>Items
          </Menu.Item>

          <Menu.Item key="/customers" icon={<UserOutlined />}>
            <Link to="/customers"></Link>Customers
          </Menu.Item>

          <Menu.Item key="logout" icon={<LoginOutlined />}>
            <Link to="/logout"></Link>Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 10,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}

       

          <div
            className="cart-count d-flex align-items-center"
            onClick={() => navigate("/cart")}
          >
            <b>
              <p className="mt-3 mr-2">{cartItems.length}</p>
            </b>
            <ShoppingCartOutlined /> 
          </div>
        </Header>

        <Content
          className="site-layout-background content_container"
          style={{
            margin: "10px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;