import React, { useEffect } from 'react';
import classes from './Login.module.css';
import { Preloader } from '../Preloader/Preloader';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

export const Login = (props) => {
  const onSubmit = (formData) => {
    props.loginThunk(formData.login, formData.password, formData.rememberMe);
  };
  return (
    <div className={classes.loginPage}>
      {!props.initialized ? (
        <Preloader className={classes.form__preloader} />
      ) : null}
      {!props.isAuth ? (
        <ReduxLoginForm onSubmit={onSubmit} />
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <div className={classes.formWrapper}>
      <h1 className={classes.title}>Login</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            className={classes.form__item}
            placeholder="Login"
            component={'input'}
            name={'login'}
            type={'email'}
          />
        </div>
        <div>
          <Field
            className={classes.form__item}
            placeholder="Password"
            component={'input'}
            name={'password'}
            type="password"
          />
        </div>
        <div>
          <Field type="checkbox" component={'input'} name={'rememberMe'} />{' '}
          Remember me!
        </div>
        <div>
          <button className={classes.form__button}>Log in</button>
        </div>
      </form>
    </div>
  );
};

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);
