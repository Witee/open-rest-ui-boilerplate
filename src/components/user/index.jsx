import React from 'react';
import PropTypes from 'prop-types';
import { Table, Breadcrumb, Card, Radio, Row, Col, Popconfirm, Button } from 'antd';
import { Link } from 'react-router';
import forEach from 'lodash/forEach';
import BreadcrumbCustom from '../BreadcrumbCustom';
import AddForm from './addForm';

const User = (props) => {
  const handleSetUserRole = (userId, role) => {
    props.setUserRoleAction(userId, role);
  };

  const handleSetUserStatus = (userId, status) => {
    props.setUserStatusAction(userId, status);
  };

  const handleDelUser = (userId) => {
    props.delUserAction(userId);
  };
  const columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: '角色',
    dataIndex: 'role',
    key: 'role',
    render: (role, record) => (
      <Radio.Group
        defaultValue={role}
        onChange={(e) => handleSetUserRole(record.id, e.target.value)}
        size="small"
        disabled={record.id === 1} // 管理员不允许修改
      >
        <Radio.Button value="admin">管理员</Radio.Button>
        <Radio.Button value="member">普通成员</Radio.Button>
      </Radio.Group>
    ),
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (status, record) => (
      <Radio.Group
        defaultValue={status}
        onChange={(e) => handleSetUserStatus(record.id, e.target.value)}
        size="small"
        disabled={record.id === 1} // 管理员不允许修改
      >
        <Radio.Button value="enabled">启用</Radio.Button>
        <Radio.Button value="disabled">禁用</Radio.Button>
      </Radio.Group>
    ),
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    render: (text, record) => (
      <Popconfirm
        title="确定删除？"
        okText="确定"
        cancelText="取消"
        onConfirm={() => { handleDelUser(record.id); }}
      >
        {/* 管理员不允许删除 */}
        <Button size="small" type="danger" disabled={record.id === 1}>删除</Button>
      </Popconfirm>
    ),
  },
  ];
  const data = [];
  forEach(props.userList, (ITEM) => {
    data.push({
      key: ITEM.id,
      id: ITEM.id,
      userName: ITEM.name,
      email: ITEM.email,
      role: ITEM.role,
      status: ITEM.status,
      createdAt: moment(ITEM.createdAt).format('YYYY-MM-DD HH:mm:ss'),
    });
  });
  const pagination = {
    total: props.totalItems,
    showQuickJumper: true,
    showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
  };
  return (
    <div className="gutter-example button-demo">
      <BreadcrumbCustom first={<Breadcrumb.Item><Link to={'/app/user/index'}>用户管理</Link></Breadcrumb.Item>} second="" />

      <Card>
        <Row>
          <Col span={2} offset={22}>
            <AddForm addUserAction={props.addUserAction} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Table
              columns={columns}
              dataSource={data}
              pagination={pagination}
              onChange={props.paginationOnChange}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

User.propTypes = {
  userList: PropTypes.array.isRequired,
  totalItems: PropTypes.number.isRequired,
  paginationOnChange: PropTypes.func.isRequired,
  setUserRoleAction: PropTypes.func.isRequired,
  setUserStatusAction: PropTypes.func.isRequired,
  addUserAction: PropTypes.func.isRequired,
  delUserAction: PropTypes.func.isRequired,
};

export default User;
