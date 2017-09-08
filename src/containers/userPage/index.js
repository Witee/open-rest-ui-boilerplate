import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../../components/user';
import {
  addUserAction,
  getUserListAction,
  delUserAction,
  setUserRoleAction,
  setUserStatusAction,
} from './actions';

class UserPage extends React.Component {
  state = {
    startIndex: 0,
    searchText: '',
  }
  componentWillMount() {
    // 获取所有用户列表
    this.props.getUserListAction({ startIndex: this.state.startIndex });
  }

  paginationOnChange = (pagination) => {
    // pagination 用来控制分页展示数据的开始 index
    const startIndex = (pagination.current - 1) * 10;
    this.setState({ startIndex });

    this.props.getUserListAction({ startIndex });
  }

  render() {
    return (
      <User
        addUserAction={this.props.addUserAction}
        userList={this.props.data}
        totalItems={this.props.totalItems}
        delUserAction={this.props.delUserAction}
        setUserRoleAction={this.props.setUserRoleAction}
        setUserStatusAction={this.props.setUserStatusAction}
        paginationOnChange={this.paginationOnChange}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.userReducer.data,
  totalItems: state.userReducer.totalItems,
});

const mapDispatchToProps = (dispatch) => ({
  addUserAction: (params) => dispatch(addUserAction(params)),
  getUserListAction: (params) => dispatch(getUserListAction(params)),
  delUserAction: (userId) => dispatch(delUserAction(userId)),
  setUserRoleAction: (userId, role) => dispatch(setUserRoleAction(userId, role)),
  setUserStatusAction: (userId, status) => dispatch(setUserStatusAction(userId, status)),
});

UserPage.propTypes = {
  data: PropTypes.array.isRequired,
  totalItems: PropTypes.number.isRequired,
  addUserAction: PropTypes.func.isRequired,
  getUserListAction: PropTypes.func.isRequired,
  delUserAction: PropTypes.func.isRequired,
  setUserRoleAction: PropTypes.func.isRequired,
  setUserStatusAction: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
