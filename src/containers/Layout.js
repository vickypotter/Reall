import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import './Layout.css';
import logo from '../assets/recall_logo.png';

const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout className="layout">
                <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                    id="MenuBar"
                >
                    <Menu.Item  key="4">
                        <img className="logo" src={logo} alt="logo"/>
                        {/* <Link to="">Recall</Link> */}
                    </Menu.Item>
                    <Menu.Item id="title" key="5">
                        {/* <img className="logo" src={logo} alt="logo"/> */}
                        
                    </Menu.Item>
                    <Menu.Item id="title" key="0">
                        {/* <img className="logo" src={logo} alt="logo"/> */}
                        <Link to="">Recall</Link>
                    </Menu.Item>

                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                {
                    this.props.isAuthenticated ?
    
                    <Menu.Item key="2" className="menuLogin" onClick={this.props.logout}>
                        Logout
                    </Menu.Item>
    
                    :
    
                    <Menu.Item  className="menuLogin" key="2">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                }
    
                   
                </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                    <Breadcrumb.Item><Link to="/">List</Link></Breadcrumb.Item>
                </Breadcrumb>
                    <div className="box">
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Recall Pvt ©2020 Created by Ram
                </Footer> 
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));