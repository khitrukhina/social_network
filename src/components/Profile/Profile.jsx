import React from 'react';

import avatar from './images/ava.png';
import classes from './Profile.module.css';
import { PostsContainer } from '../PostsContainer';

const Avatar = () => {
  return (
    <div>
      <img src={avatar} className={classes.avatar} alt="avatar"></img>
    </div>
  );
};

const ProfileInfo = () => {
  return (
    <div>
      <p className={classes.name}>Yulia Khitrukhina</p>
      <div className={classes.profile_info}>
        <p>Date of birth: 14.05.1995</p>
        <p>City: Kharkiv</p>
        <p>Education: KMC, NPU</p>
        <p>Web site:</p>
      </div>
    </div>
  );
};

export const Profile = (props) => {
  return (
    <div className={classes.profileWrapper}>
      <div className={classes.wallpaper}></div>
      <div className="d-flex m-4">
        <Avatar />
        <ProfileInfo />
      </div>
      <div className={classes.profile__line}></div>
      <PostsContainer store={props.store} />
    </div>
  );
};
