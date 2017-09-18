import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
const { Sider } = Layout;

class SiderCustom extends Component {
  state = {
    currentPath: '#/app/dashboard/index',
  }
  componentWillMount() {
    this.setState({ currentPath: location.hash });
  }
  render() {
    return (
      <Sider
        trigger={null}
        breakpoint="lg"
        collapsed={this.props.collapsed}
        style={{ overflowY: 'auto' }}
      >
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[this.state.currentPath]}>

          <Menu.Item key="#/app/dashboard/index">
            <Link to={'/app/dashboard/index'}><Icon type="home" /><span className="nav-text">首页</span></Link>
          </Menu.Item>

          <Menu.Item key="#/app/user/index">
            <Link to={'/app/user/index'}><Icon type="user" /><span className="nav-text">用户管理</span></Link>
          </Menu.Item>

        </Menu>
      </Sider>
    );
  }
}

SiderCustom.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default SiderCustom;
