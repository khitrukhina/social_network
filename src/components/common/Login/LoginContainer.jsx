import { Login } from './Login';
import { connect } from 'react-redux';
import { loginThunk } from '../../../redux/auth-reducer';

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    isAuth: state.auth.isAuth,
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.myProfile,
    initialized: state.app.initialized,
  };
};

export const LoginContainer = connect(mapStateToProps, { loginThunk })(Login);
