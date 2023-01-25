import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from '../../redux/users-reducer';
import Preloader from '../middleware/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
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
    isFetching: state.usersPage.isFetching
  }
};

let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching))
    }
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);