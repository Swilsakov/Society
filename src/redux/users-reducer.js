import { usersAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  isFollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          };
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          };
          return u;
        })
      };
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        isFollowingInProgress: action.isFollowing
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state;
  }
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingInProgress = (isFollowing, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFollowing, userId })

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsersAPI(currentPage, pageSize)
      .then(res => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(res.data.items));
        dispatch(setTotalUsersCount(res.data.totalCount));
      })
      .catch(error => console.log(error));
  }
}

export const followThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    usersAPI.followAPI(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleIsFollowingInProgress(false, userId));
      });
  }
}

export const unfollowThunkCreator = (userId) => {
  return (dispatch) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    usersAPI.unfollowAPI(userId)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleIsFollowingInProgress(false, userId));
      });
  }
}



export default usersReducer;