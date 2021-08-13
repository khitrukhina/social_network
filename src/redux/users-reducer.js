import { apiFunctions } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING;';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };
    case SET_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({
  type: SET_PAGE,
  currentPage,
});
const setTotalCountAC = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

export const getUserThunk = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(toggleIsFetchingAC(true));
    const data = await apiFunctions.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(data.items));
    dispatch(setTotalCountAC(data.totalCount));
  };
};

export const setCurrentPageThunk = (page, pageSize) => {
  return async (dispatch) => {
    dispatch(setCurrentPageAC(page));
    dispatch(toggleIsFetchingAC(true));
    const response = await apiFunctions.setCurrentPage(page, pageSize);
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUsersAC(response.data.items));
  };
};

export const followThunk = (id) => {
  return async (dispatch) => {
    const response = await apiFunctions.follow(id);
    if (response.data.resultCode === 0) {
      dispatch(followAC(id));
    }
  };
};

export const unfollowThunk = (id) => {
  return async (dispatch) => {
    const response = await apiFunctions.unfollow(id);
    if (response.data.resultCode === 0) {
      dispatch(unfollowAC(id));
    }
  };
};
