import { apiFunctions } from '../api/api';

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING;';
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, text: "Hi! I've already started learning React!", likes: 0 },
  ],
  newPostText: '',
  profile: null,
  myProfile: null,
  isFetching: false,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, { id: 10, text: state.newPostText, likes: 0 }],
        newPostText: '',
      };

    case CHANGE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      };

    case SET_USER_PROFILE:
      return {
        ...state,
        profile: { ...action.profile },
      };

    case SET_MY_PROFILE:
      return {
        ...state,
        myProfile: { ...action.profile },
      };

    case SET_STATUS:
      debugger;
      return {
        ...state,
        status: action.status,
      };

    default:
      return state;
  }
};

export const changeNewPostTextActionCreator = (newPostText) => ({
  type: CHANGE_NEW_POST_TEXT,
  newPostText: newPostText,
});
export const addPostActionCreator = () => ({ type: ADD_POST });

const setUserProfileAC = (profile) => ({
  type: SET_USER_PROFILE,
  profile: { ...profile },
});

const setMyProfileAC = (profile) => ({
  type: SET_MY_PROFILE,
  profile: { ...profile },
});

const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const setStatusAC = (status) => ({
  type: SET_STATUS,
  status,
});

export const setProfileThunk = (id) => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  apiFunctions.getProfile(id).then((profile) => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(setUserProfileAC(profile));
  });
};

export const setMyProfileThunk = (id) => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  apiFunctions.getProfile(id).then((profile) => {
    dispatch(toggleIsFetchingAC(false));
    dispatch(setMyProfileAC(profile));
  });
};

export const getStatusThunk = (id) => (dispatch) => {
  apiFunctions.getStatus(id).then((response) => {
    console.log(response);
    dispatch(setStatusAC(response.data));
  });
};

export const setStatusThunk = (status) => (dispatch) => {
  console.log(status);
  apiFunctions.setStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};
