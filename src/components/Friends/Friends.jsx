import React from 'react';
import classes from './Friends.module.css';

export const Friends = (props) => {
  return (
    <div className={classes.friendsWrapper}>
      {props.friends.map((friend, index) => {
        return <Friend name={friend.name} id={friend.id} key={index} />;
      })}
    </div>
  );
};

const Friend = (props) => {
  return (
    <div>
      <div className={classes.image}></div>
      <div>{props.name}</div>
    </div>
  );
};
