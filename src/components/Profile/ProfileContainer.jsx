import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import avatar from './images/ava.png';
import classes from './Profile.module.css';
import { PostsContainer } from '../Posts/PostsContainer';
import {
  setMyProfileThunk,
  getStatusThunk,
  setStatusThunk,
} from '../../redux/profile-reducer';
import { authUserThunk } from '../../redux/auth-reducer';
import { withAuthRedirect } from '../../hoc/AuthRedirect';
import { Preloader } from '../../components/common/Preloader/Preloader';
import { compose } from 'redux';

export class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.authUserThunk();
    this.props.setMyProfileThunk(this.props.auth.id);
    this.props.getStatusThunk(this.props.auth.id);
  }

  render() {
    return (
      <div className={classes.profileWrapper}>
        <div className={classes.wallpaper}></div>
        <div className="d-flex m-4">
          <div className={classes.avatar_status}>
            <Avatar />
            <ProfileStatus
              status={this.props.status}
              getStatusThunk={this.props.getStatusThunk}
              setStatusThunk={this.props.setStatusThunk}
            />
          </div>
          <ProfileInfo {...this.props.myProfile} />
        </div>
        <div className={classes.profile__line}></div>
        <PostsContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    myProfile: state.profilePage.myProfile,
    auth: state.auth,
    isFetching: state.auth.isFetching,
    status: state.profilePage.status,
  };
};

export const ProfileContainerComponent = compose(
  connect(mapStateToProps, {
    setMyProfileThunk,
    authUserThunk,
    getStatusThunk,
    setStatusThunk,
  }),
  withAuthRedirect
)(ProfileContainer);

const Avatar = () => {
  return (
    <div className={classes.avatarWrapper}>
      <img src={avatar} className={classes.avatar} alt="avatar"></img>
    </div>
  );
};

const ProfileStatus = (props) => {
  const [editMode, changeEditMode] = useState(false);
  const [status, changeStatus] = useState(props.status);
  const empty = '' || ' ';
  useEffect(() => {
    changeStatus(props.status);
  }, [props.status]);
  return (
    <div>
      {editMode && (
        <input
          value={status}
          autoFocus={true}
          onFocus={(e) => e.target.select()}
          onChange={(e) => changeStatus(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();

              console.log(e.target.value);
              if (e.target.value !== empty) {
                props.setStatusThunk(status);
              }
              changeEditMode(false);
            }
          }}
          onBlur={(e) => {
            if (e.target.value !== empty) {
              props.setStatusThunk(status);
            }
            changeEditMode(false);
          }}
        />
      )}
      {!editMode && (
        <span
          onDoubleClick={(e) => {
            changeEditMode(true);
          }}
        >
          {status ? status : 'Doubleclick to change your status'}
        </span>
      )}
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
