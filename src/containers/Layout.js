import React from 'react';
import {Link} from 'react-router-dom'

import {
    ScissorOutlined,
    CarOutlined,
    CreditCardFilled,
    BugFilled,
    CalendarFilled
  } from '@ant-design/icons';
import { Layout, Menu, PageHeader, Breadcrumb } from 'antd';

const { Header, Sider, Content, Footer } = Layout;


const CustomLayout = (props) => {
    return(
        <Layout className="layout">
            <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
            >
                <PageHeader
                    className="site-page-header"
                    title="ESTETICA"
                    style={{backgroundColor:'rgba(67, 254, 154, 1)', border: 0}}                    
                />
                <Menu theme="dark" style={{ marginTop: -4}} mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<CalendarFilled />}>
                        <Link to="/agenda">Agendar cita</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<BugFilled  />}>
                        <Link to="/producto">Productos</Link>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ScissorOutlined />}>
                        <Link to="/servicio">Servicio</Link>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<CreditCardFilled  />}>
                        <Link to="/misVentas">Mis ventas</Link>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<CreditCardFilled  />}>                    
                        <Link to="/venta">Dpto Ventas</Link>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<CarOutlined  />}>
                        <Link to="/transporte">Transporte</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>                
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to="/producto">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to="/producto">List</Link></Breadcrumb.Item>
                </Breadcrumb>
                <div className="site-layout-content">
                    {props.children}
                </div>
                </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2020 Created by Ant RAM</Footer>
    </Layout>
  </Layout>
    );
}

export default CustomLayout;   

