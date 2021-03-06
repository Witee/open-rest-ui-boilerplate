import React from 'react';
import { Menu, Icon, Layout } from 'antd';
import PropTypes from 'prop-types';
import avater from '../assets/imgs/default_male.png';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HeaderCustom = (props) => (
  <Header className="custom-theme" >
    <Icon
      className="trigger custom-trigger"
      type={props.collapsed ? 'menu-unfold' : 'menu-fold'}
      onClick={props.toggle}
    />
    <Menu
      mode="horizontal"
      style={{ lineHeight: '64px', float: 'right' }}
      theme="dark"
    >

      <SubMenu title={<span className="avatar"><img src={avater} alt="头像" /></span>}>
        <MenuItemGroup title={<span><Icon type="setting" /> {props.userName}</span>}>
          <Menu.Item key="logout"><span onClick={() => { props.logout(); }}><Icon type="logout" />退出登录</span></Menu.Item>
        </MenuItemGroup>
      </SubMenu>
    </Menu>
  </Header>
);

HeaderCustom.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

export default HeaderCustom;
