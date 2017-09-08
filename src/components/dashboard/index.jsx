import React from 'react';
import { Card } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

const Dashboard = () => (
  <div className="gutter-example button-demo">
    <BreadcrumbCustom first="" second="" />

    <Card>
      这是首页内容
    </Card>
  </div>
);

export default Dashboard;
