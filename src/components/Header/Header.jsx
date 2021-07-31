import React from 'react';
import { NavLink } from 'react-router-dom';
import { Preloader } from '../common/Preloader/Preloader';

const styles = {
  div: {
    display: 'flex',
    alignItems: 'center',
    height: '70px',
    backgroundImage:
      'linear-gradient(40deg, #FEC64F 30%, #008C4D 70%, #375A44 100%)',
  },
  img: {
    height: '60px',
    width: '60px',
  },
  a: {
    marginLeft: '4%',
  },
  login: {
    flexGrow: 1,
    textAlign: 'right',
    marginRight: '4%',
    color: 'white',
  },
};

export const Header = (props) => {
  return (
    <div style={styles.div}>
      <a href="/" style={styles.a}>
        <img
          style={styles.img}
          src="https://www.pngkey.com/png/full/24-242008_vector-abstract-png-abstract-logo-template-logo-templates.png"
          alt=""
        />
      </a>
      <div style={styles.login}>
        {props.auth.isAuth ? (
          <span>{props.auth.login} </span>
        ) : (
          <NavLink to="/login">LOGIN</NavLink>
        )}
      </div>
    </div>
  );
};
