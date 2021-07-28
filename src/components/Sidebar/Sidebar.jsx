import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Friends } from '../Friends/Friends';
import classes from './Sidebar.module.css';

export const Sidebar = (props) => {
  return (
    <div className={classes.sidebarWrapper}>
      <Navbar />
      <Friends friends={props.sidebar.friends} />
    </div>
  );
};
