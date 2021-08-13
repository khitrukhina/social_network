import React from 'react';
import { connect } from 'react-redux';

import {
  getUserThunk,
  setCurrentPageThunk,
  unfollowThunk,
  followThunk,
} from '../../redux/users-reducer';
import { Users } from './Users';

class UsersContainerComponent extends React.Component {
  componentDidMount() {
    this.props.getUserThunk(this.props.currentPage, this.props.pageSize);
  }
  render() {
    return <Users {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    isFetching: state.usersPage.isFetching,
    isAuth: state.auth.isAuth,
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageAC(currentPage));
//     },
//     setTotalCount: (totalCount) => {
//       dispatch(setTotalCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     },
//   };
// };

export const UsersContainer = connect(mapStateToProps, {
  getUserThunk,
  setCurrentPageThunk,
  unfollowThunk,
  followThunk,
})(UsersContainerComponent);
