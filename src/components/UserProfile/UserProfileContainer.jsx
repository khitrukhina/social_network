import { connect } from 'react-redux';
import React from 'react';
import { UserProfile } from './UserProfile';
import { setProfileThunk } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class UserProfileContainer extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    this.props.setProfileThunk(id);
  }

  render() {
    return <UserProfile {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  };
};

const UserProfileContainerWithRouter = withRouter(UserProfileContainer);

export const UserProfileContainerComponent = connect(mapStateToProps, {
  setProfileThunk,
})(UserProfileContainerWithRouter);
