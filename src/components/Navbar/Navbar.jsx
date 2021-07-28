import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={classes.navbarWrapper}>
      <div className={classes.navbar__item}>
        <NavLink to="/">PROFILE</NavLink>
      </div>
      <div className={classes.navbar__item}>
        <NavLink to="/dialogs">MESSAGES</NavLink>
      </div>
      <div className={classes.navbar__item}>
        <NavLink to="/users">USERS</NavLink>
      </div>
      <div className={classes.navbar__item}>
        <NavLink to="/music">MUSIC</NavLink>
      </div>
      <div className={classes.navbar__item}>
        <NavLink to="/settings">SETTINGS</NavLink>
      </div>
    </div>
  );
};
