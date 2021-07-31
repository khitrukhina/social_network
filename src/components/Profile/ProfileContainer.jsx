import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import avatar from './images/ava.png';
import classes from './Profile.module.css';
import { PostsContainer } from '../Posts/PostsContainer';
import { setMyProfileThunk } from '../../redux/profile-reducer';
import { authUserThunk } from '../../redux/auth-reducer';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { Preloader } from '../../components/common/Preloader/Preloader';

export class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.authUserThunk();
    this.props.setMyProfileThunk(this.props.auth.id);
  }
  render() {
    return <Profile profile={this.props.profile} {...this.props} />;
  }
}
const Profile = (props) => {
  return (
    <div className={classes.profileWrapper}>
      <div className={classes.wallpaper}></div>
      <div className="d-flex m-4">
        <Avatar />
        <ProfileInfo {...props.myProfile} />
      </div>
      <div className={classes.profile__line}></div>
      <PostsContainer store={props.store} />
    </div>
  );
};

let AuthRedirectProfile = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    myProfile: state.profilePage.myProfile,
    auth: state.auth,
    isFetching: state.auth.isFetching,
  };
};

export const ProfileContainerComponent = connect(mapStateToProps, {
  setMyProfileThunk,
  authUserThunk,
})(AuthRedirectProfile);

const Avatar = () => {
  return (
    <div>
      <img src={avatar} className={classes.avatar} alt="avatar"></img>
    </div>
  );
};

const ProfileInfo = (props) => {
  return (
    <div>
      <div className={classes.profile_info}>
        <div>
          <p className={classes.name}>{props.fullName}</p>
          <div>
            <p>{props.aboutMe}</p>
            {props.lookingForAJob ? (
              <FontAwesomeIcon
                icon={faCheckSquare}
                className={classes.green_check}
              />
            ) : (
              <FontAwesomeIcon
                icon={faCheckSquare}
                className={classes.red_check}
              />
            )}
            <p>{props.lookingForAJobDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
