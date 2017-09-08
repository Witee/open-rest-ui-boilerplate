import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Register from '../../components/register';
import { handleRegisterSubmit } from './actions';

// 启用顶部加载条右侧加载圆圈样式
nprogress.configure({ showSpinner: true });

const RegisterPage = (props) => (
  <Register handleRegisterSubmit={props.handleRegisterSubmit} />
);

const mapStateToPorps = () => ({});
const mapDispatchToProps = (dispatch) => ({
  handleRegisterSubmit: (params) => dispatch(handleRegisterSubmit(params)),
});

RegisterPage.propTypes = {
  handleRegisterSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToPorps, mapDispatchToProps)(RegisterPage);
