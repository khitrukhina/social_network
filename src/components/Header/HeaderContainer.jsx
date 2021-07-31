import React from 'react';
import { connect } from 'react-redux';

import { Header } from './Header';
import { authUserThunk } from '../../redux/auth-reducer';
import { setMyProfileThunk } from '../../redux/profile-reducer';

class HeaderContainerAuth extends React.Component {
  componentDidMount() {
    this.props.authUserThunk();

    this.props.setMyProfileThunk(18636);
  }
  render() {
    return <HeaderContainerSetProfile {...this.props} />;
  }
}

class HeaderContainerSetProfile extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isFetching: state.auth.isFetching,
});
export let HeaderContainer = connect(mapStateToProps, {
  authUserThunk,
  setMyProfileThunk,
})(HeaderContainerAuth);
