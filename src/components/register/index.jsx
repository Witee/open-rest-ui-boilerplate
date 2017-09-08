import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';

class Register extends React.Component {
  state = {
    confirmDirty: false,
  };

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('密码不一致！');
    } else {
      callback();
    }
  };

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  // 提交按钮
  handleSubmit = () => {
    const form = this.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.handleRegisterSubmit(values);
      form.resetFields();
    });
  }
  render() {
    const FormItem = Form.Item;
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 6,
        },
      },
    };
    return (
      <div className="login">
        <div className="login-form" style={{ width: '500px', height: '400px' }}>
          <div className="login-logo">
            <span>OPEN-REST注册</span>
          </div>
          <Form onSubmit={this.handleSubmit}>
            <FormItem
              {...formItemLayout}
              label={(
                <span>
                  姓名
                </span>
              )}
              hasFeedback
            >
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名!', whitespace: true }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="邮箱"
              hasFeedback
            >
              {getFieldDecorator('email', {
                rules: [{
                  type: 'email', message: '请输入合理的邮箱地址!',
                }, {
                  required: true, message: '请输入邮箱地址!',
                }],
              })(
                <Input />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="密码"
              hasFeedback
            >
              {getFieldDecorator('password', {
                rules: [{
                  required: true, message: '请输入密码!',
                }, {
                  validator: this.checkConfirm,
                }],
              })(
                <Input type="password" />
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label="确认密码"
              hasFeedback
            >
              {getFieldDecorator('confirm', {
                rules: [{
                  required: true, message: '请确认你的密码!',
                }, {
                  validator: this.checkPassword,
                }],
              })(
                <Input type="password" onBlur={this.handleConfirmBlur} />
              )}
            </FormItem>

            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="large">注册</Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}
Register.propTypes = {
  handleRegisterSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};
export default Form.create()(Register);
