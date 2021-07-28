import React from 'react';

import classes from './Users.module.css';

const imageUrl = 'https://avatarfiles.alphacoders.com/145/thumb-145833.jpg';

export const Users = (props) => {
  return (
    <div className={classes.users}>
      {props.users.map((user) => {
        return (
          <div className={classes.user}>
            <div className={classes.user__avatarBlock}>
              <div>
                <img
                  alt="user_avatar"
                  src={imageUrl}
                  className={classes.user__avatarBlock_avatar}
                />
              </div>
              <div className={classes.user__avatarBlock_button}>
                {user.followed ? (
                  <button
                    onClick={() => {
                      return props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      return props.follow(user.id);
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
                <div className={classes.user__info_status}>{user.website}</div>
              </div>
              <div className={classes.user__info_location}>
                {user.address.city}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
