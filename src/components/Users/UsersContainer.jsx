import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { setCurrentPage, toggleIsFollowingInProgress, getUsersThunkCreator, followThunkCreator, unfollowThunkCreator } from '../../redux/users-reducer';
import Preloader from '../middleware/Preloader/Preloader';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  };

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
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

export default compose(
  connect(mapStateToProps, {
    follow: followThunkCreator,
    unfollow: unfollowThunkCreator,
    setCurrentPage,
    toggleIsFollowingInProgress,
    getUsers: getUsersThunkCreator
  }),
  withAuthRedirect
)(UsersContainer)

// let withAuthRedirectComponent = withAuthRedirect(UsersContainer)
// export default connect(mapStateToProps, {
//   follow: followThunkCreator,
//   unfollow: unfollowThunkCreator,
//   setCurrentPage,
//   toggleIsFollowingInProgress,
//   getUsers: getUsersThunkCreator
// })(withAuthRedirectComponent);