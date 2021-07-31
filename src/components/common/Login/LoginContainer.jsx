import { Login } from './Login';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    isFetching: state.profilePage.isFetching,
    profile: state.profilePage.myProfile,
  };
};

export const LoginContainer = connect(mapStateToProps)(Login);
