import React from 'react';
import classes from './Login.module.css';
import { Preloader } from '../Preloader/Preloader';
import { ProfileContainerComponent } from '../../Profile/ProfileContainer';
import { Redirect } from 'react-router-dom';

export const Login = (props) => {
  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      {!props.isAuth ? <div>Login</div> : <Redirect to="/" />}
    </>
  );
};
