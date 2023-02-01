import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleIsFollowingInProgress } from '../../redux/users-reducer';
import Preloader from '../middleware/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    usersAPI.getUsersAPI(this.props.currentPage, this.props.pageSize)
      .then(res => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
      .catch(error => console.log(error));
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    usersAPI.getUsersAPI(pageNumber, this.props.pageSize)
      .then(res => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(res.data.items)
      })
      .catch(error => console.log(error));
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        toggleIsFollowingInProgress={this.props.toggleIsFollowingInProgress}
        isFollowingInProgress={this.props.isFollowingInProgress}
      />
    </>
  }
};

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    isFollowingInProgress: state.usersPage.isFollowingInProgress
  }
};

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
  toggleIsFollowingInProgress
})(UsersContainer);