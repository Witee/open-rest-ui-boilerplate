import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router';

const BreadcrumbCustom = (props) => {
  const first = <Breadcrumb.Item>{props.first}</Breadcrumb.Item> || '';
  const second = <Breadcrumb.Item>{props.second}</Breadcrumb.Item> || '';
  return (
    <span>
      <Breadcrumb style={{ margin: '12px 0' }}>
        <Breadcrumb.Item><Link to={'/app/dashboard/index'}>首页</Link></Breadcrumb.Item>
        {first}
        {second}
      </Breadcrumb>

    </span>
  );
};

BreadcrumbCustom.propTypes = {
  first: PropTypes.node.isRequired,
  second: PropTypes.node.isRequired,
};

export default BreadcrumbCustom;
