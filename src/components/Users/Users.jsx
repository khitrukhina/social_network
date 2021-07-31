import React from 'react';

import classes from './Users.module.css';
import classNames from 'classnames';

import { Preloader } from '../common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

const imageUrl = 'https://avatarfiles.alphacoders.com/145/thumb-145833.jpg';

export const Users = (props) => {
  const setCurrentPage = (page) => {
    props.setCurrentPageThunk(page, props.pageSize);
  };

  return (
    <>
      <div className={classes.users}>
        {props.isFetching && <Preloader />}
        <div className={classes.page_items}>
          {props.pages.map((page) => {
            let pageItemClass = classNames(classes.page_item, {
              [classes.active]: props.currentPage === page,
            });
            return (
              <li
                key={page}
                className={pageItemClass}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </li>
            );
          })}
        </div>
        {props.users.map((user) => {
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
                  {user.followed ? (
                    <button
                      onClick={() => {
                        props.unfollowThunk(user.id);
                      }}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        props.followThunk(user.id);
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
        })}
      </div>
    </>
  );
};
