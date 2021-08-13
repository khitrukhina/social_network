import React, { useState } from 'react';
import classNames from 'classnames';
import uuid from 'react-uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classes from './Users.module.css';
import { User } from './User';
import { Preloader } from '../common/Preloader/Preloader';

export const Users = (props) => {
  const setCurrentPage = (page) => {
    props.setCurrentPageThunk(page, props.pageSize);
  };
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  const portionSize = 15;
  const portionCount = pagesCount / 15;
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPageNumber = portionNumber * portionSize;

  return (
    <>
      <div className={classes.users}>
        {props.isFetching && <Preloader />}
        <div className={classes.page_items}>
          {portionNumber > 1 && (
            <button
              onClick={() => {
                setPortionNumber(portionNumber - 1);
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
            </button>
          )}
          {pages
            .filter((page) => page >= leftPageNumber && page <= rightPageNumber)
            .map((page) => {
              return (
                <li
                  key={uuid()}
                  className={classNames(classes.page_item, {
                    [classes.active]: props.currentPage === page,
                  })}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </li>
              );
            })}
          {portionCount > portionNumber && (
            <button
              onClick={() => {
                setPortionNumber(portionNumber + 1);
              }}
            >
              <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
            </button>
          )}
        </div>
        {props.users.map((user) => {
          return (
            <User
              key={uuid()}
              isAuth={props.isAuth}
              user={user}
              unfollowThunk={props.unfollowThunk}
              followThunk={props.followThunk}
            />
          );
        })}
      </div>
    </>
  );
};
