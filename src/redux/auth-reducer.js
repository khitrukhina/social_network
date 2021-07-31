import { apiFunctions } from '../api/api';

const AUTH_USER = 'AUTH_USER';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING;';

let initialState = {
  id: null,
  login: null,
  email: null,
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

export const authUserThunk = () => (dispatch) => {
  dispatch(toggleIsFetchingAC(true));
  apiFunctions.auth().then((data) => {
    if (data.resultCode === 0) {
      let id = data.data.id;
      let email = data.data.email;
      let login = data.data.login;
      dispatch(toggleIsFetchingAC(false));
      dispatch(authUserAC(id, email, login));
    }
  });
};
