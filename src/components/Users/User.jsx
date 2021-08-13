import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';

export const User = ({ user, followThunk, unfollowThunk, isAuth }) => {
  const imageUrl = 'https://avatarfiles.alphacoders.com/145/thumb-145833.jpg';
  return (
    <div className={classes.user} key={user.id}>
      <div className={classes.user__avatarBlock}>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            {user.photos.small ? (
              <img
                alt="user_avatar"
                src={user.photos.small}
                className={classes.user__avatarBlock_avatar}
              />
            ) : (
              <img
                alt="user_avatar"
                src={imageUrl}
                className={classes.user__avatarBlock_avatar}
              />
            )}
          </NavLink>
        </div>
        <div className={classes.user__avatarBlock_button}>
          {user.followed && isAuth && (
            <button
              onClick={() => {
                unfollowThunk(user.id);
              }}
            >
              Unfollow
            </button>
          )}
          {!user.followed && isAuth && (
            <button
              onClick={() => {
                followThunk(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={classes.user__infoBlock}>
        <div className={classes.user__info}>
          <div className={classes.user__info_name}>{user.name}</div>
          <div className={classes.user__info_status}>{user.status}</div>
        </div>
        <div className={classes.user__info_location}>City</div>
      </div>
    </div>
  );
};
