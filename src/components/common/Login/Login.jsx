import React from 'react';
import classes from './Login.module.css';
import { Preloader } from '../Preloader/Preloader';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

export const Login = (props) => {
  return (
    <>
      {props.isFetching ? <Preloader /> : null}
      {!props.isAuth ? <ReduxLoginForm /> : <Redirect to="/" />}
    </>
  );
};

const LoginForm = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder="Login" component={'input'} name={'login'} />
        </div>
        <div>
          <Field placeholder="Password" component={'input'} name={'password'} />
        </div>
        <div>
          <Field type="checkbox" component={'input'} name={'rememberMe'} />{' '}
          Remember me!
        </div>
        <div>
          <button>Log in</button>
        </div>
      </form>
    </div>
  );
};

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);
