import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Layout, Modal } from 'antd';
import { connect } from 'react-redux';
import './assets/index.less';
import SiderCustom from './components/SiderCustom';
import HeaderCustom from './components/HeaderCustom';
import { getSelfInfo } from './containers/self/actions';
import { userLogoutAction } from './containers/logout/actions';

const { Content, Footer } = Layout;

class App extends Component {
  state = {
    collapsed: false, // 侧边栏是否折叠
  };
  componentWillMount() {
    nprogress.start();
    // 判断侧边栏是否折叠
    const ifCollapsed = JSON.parse(localStorage.getItem('collapsed'));
    if (ifCollapsed === null) {
      this.setState({ collapsed: true });
    } else {
      this.setState({ collapsed: ifCollapsed });
    }
    // 通过本地是否有 access_token 和 是否过期 expired_at 判断是否需要重新登录
    const accessToken = localStorage.getItem('access_token');
    const expiredAt = localStorage.getItem('expired_at');
    if (!accessToken && (moment() > moment.unix(expiredAt / 1000))) {
      // 如果没有信息或accessToken过期，则打开登录页面
      Modal.error({
        title: '登录信息过期',
        content: '点击以下按钮将跳转至登录页面，请重新登录。',
        okText: '登录',
        onOk: () => { window.location.href = '/?#/login'; },
      });
    } else {
      // 登录成功后
      this.props.getSelfInfo();
    }
  }
  componentDidMount() {
    nprogress.done();
  }
  // 切换
  toggle = () => {
    const ifCollapsed = !this.state.collapsed;
    this.setState({
      collapsed: ifCollapsed,
    });
    localStorage.setItem('collapsed', ifCollapsed);
  };
  render() {
    return (
      <Layout className="ant-layout-has-sider">
        <SiderCustom collapsed={this.state.collapsed} />
        <Layout>
          <HeaderCustom
            userName={this.props.userName}
            toggle={this.toggle}
            collapsed={this.state.collapsed}
            logout={this.props.userLogoutAction}
          />
          <Content style={{ margin: '0 16px', overflow: 'initial' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
              Copyright © 2016-2018 OPEN-REST Inc.
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  userName: state.selfReducer.userName,
});

const mapDispatchToProps = (dispatch) => ({
  getSelfInfo: () => dispatch(getSelfInfo()),
  userLogoutAction: () => dispatch(userLogoutAction()),
});

App.propTypes = {
  userName: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  getSelfInfo: PropTypes.func.isRequired,
  userLogoutAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
