import { authUserThunk } from './auth-reducer';

let initial = {
  initialized: false,
};

const INIT_SUCCESS = 'INIT_SUCCESS';

export const appReducer = (state = initial, action) => {
  switch (action.type) {
    case INIT_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

const initSuccessAC = () => ({
  type: INIT_SUCCESS,
});

export const initThunk = () => (dispatch) => {
  dispatch(authUserThunk()).then(() => {
    dispatch(initSuccessAC());
  });
};
