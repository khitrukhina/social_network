import React from 'react';
import { connect } from 'react-redux';

import { Header } from './Header';
import { authUserThunk, logOutThunk } from '../../redux/auth-reducer';
import { setMyProfileThunk } from '../../redux/profile-reducer';
import { compose } from 'redux';

class HeaderContainerComponent extends React.Component {
  componentDidMount() {
    // this.props.authUserThunk();
    this.props.setMyProfileThunk(18636);
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isFetching: state.auth.isFetching,
});

export let HeaderContainer = compose(
  connect(mapStateToProps, {
    authUserThunk,
    setMyProfileThunk,
    logOutThunk,
  })
)(HeaderContainerComponent);
