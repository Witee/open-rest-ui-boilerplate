import React from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Input, Button } from 'antd';

const Login = (props) => {
  const FormItem = Form.Item;
  const form = props.form;
  const { getFieldDecorator } = form;
  return (
    <div className="login">
      <div className="login-form" >
        <div className="login-logo">
          <span>OPEN-REST登录</span>
        </div>
        <Form onSubmit={() => (props.handleLoginSubmit(form))} style={{ maxWidth: '300px' }}>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: '请输入邮箱!' }],
            })(
              <Input prefix={<Icon type="mail" style={{ fontSize: 13 }} />} placeholder="请输入邮箱" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }}>
              登录
            </Button>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};
Login.propTypes = {
  handleLoginSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};
export default Form.create()(Login);
