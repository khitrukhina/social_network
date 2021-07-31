import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Preloader } from '../../components/common/Preloader/Preloader';
import classes from './UserProfile.module.css';

const imageUrl = 'https://avatarfiles.alphacoders.com/145/thumb-145833.jpg';

export const UserProfile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.profile}>
      <div>
        {props.profile.photos.large ? (
          <img src={props.profile.photos.large} alt="avatar"></img>
        ) : (
          <img alt="user_avatar" src={imageUrl} />
        )}
      </div>
      <div>
        <p className={classes.name}>{props.profile.fullName}</p>
        <div>
          <p>{props.profile.aboutMe}</p>
          {props.profile.lookingForAJob ? (
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
          <p>{props.profile.lookingForAJobDescription}</p>
        </div>
      </div>
    </div>
  );
};
