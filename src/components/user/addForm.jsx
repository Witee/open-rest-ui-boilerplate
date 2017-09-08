import React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import PropTypes from 'prop-types';

class AddForm extends React.Component {
  state = {
    visible: false,
    loading: false,
  }

  showModal = () => {
    this.setState({ visible: true });
  }

  handleOk = () => {
    const form = this.props.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.addUserAction(values);
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false, visible: false });
      }, 1000);
      form.resetFields();
    });
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }
  render() {
    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 18 },
      hasFeedback: true,
    };
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          + 用户
        </Button>
        <Modal
          visible={this.state.visible}
          title="创建用户"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" size="large" onClick={this.handleCancel}>取消</Button>,
            <Button key="submit" type="primary" size="large" loading={this.state.loading} onClick={this.handleOk}>
              提交
            </Button>,
          ]}
        >
          <Form layout="horizontal">
            <Form.Item label="姓名" {...formItemLayout}>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入姓名', min: 5 }],
              })(
                <Input />
              )}
            </Form.Item>
            <Form.Item label="邮箱" {...formItemLayout}>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: '请输入邮箱', type: 'email' }],
              })(
                <Input type="email" />
              )}
            </Form.Item>

            <Form.Item label="密码" {...formItemLayout}>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码', min: 6 }],
              })(
                <Input />
              )}
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

AddForm.propTypes = {
  addUserAction: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
};

export default Form.create()(AddForm);
