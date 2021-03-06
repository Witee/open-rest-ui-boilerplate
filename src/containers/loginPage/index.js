import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../../components/login';
import { handleLoginSubmit } from './actions';

class LoginPage extends React.Component {
  onHandleLoginSubmit = (form) => {
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.handleLoginSubmit(values);
      form.resetFields();
    });
  }
  render() {
    return (
      <Login handleLoginSubmit={this.onHandleLoginSubmit} />
    );
  }
}


const mapStateToPorps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  handleLoginSubmit: (params) => dispatch(handleLoginSubmit(params)),
});

LoginPage.propTypes = {
  handleLoginSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToPorps, mapDispatchToProps)(LoginPage);
