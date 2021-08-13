import { apiFunctions } from '../api/api';

const AUTH_USER = 'AUTH_USER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING;';
const LOG_OUT = 'LOG_OUT';

let initialState = {
  id: null,
  login: null,
  email: null,
  password: null,
  rememberMe: null,
  isAuth: false,
  isFetching: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,

        id: action.id,
        email: action.email,
        login: action.login,
        isAuth: true,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case LOG_OUT:
      return {
        ...state,
        id: action.id,
        email: action.email,
        login: action.login,
        rememberMe: action.rememberMe,
        password: action.password,
        isAuth: false,
      };
    default:
      return state;
  }
};

const authUserAC = (id, email, login) => ({
  type: AUTH_USER,
  id,
  email,
  login,
});

const toggleIsFetchingAC = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});

const logOutAC = () => ({
  type: LOG_OUT,
  id: null,
  email: null,
  login: null,
  rememberMe: null,
  password: null,
});

export const authUserThunk = () => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  const data = await apiFunctions.auth();
  if (data.resultCode === 0) {
    let id = data.data.id;
    let email = data.data.email;
    let login = data.data.login;
    dispatch(authUserAC(id, email, login));
    dispatch(toggleIsFetchingAC(false));
  }
};

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  const response = await apiFunctions.login(email, password, rememberMe);
  dispatch(toggleIsFetchingAC(false));
  if (response.data.resultCode === 0) {
    let id = response.data.id;
    let email = response.data.email;
    let login = response.data.login;
    dispatch(authUserAC(id, email, login));
  }
};

export const logOutThunk = () => async (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  const response = await apiFunctions.logOut();
  dispatch(toggleIsFetchingAC(false));
  if (response.data.resultCode === 0) {
    dispatch(logOutAC());
  }
};
