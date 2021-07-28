import React from 'react';

const styles = {
  div: {
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
};

export const Header = () => {
  return (
    <div style={styles.div}>
      <a href="/" style={styles.a}>
        <img
          style={styles.img}
          src="https://www.pngkey.com/png/full/24-242008_vector-abstract-png-abstract-logo-template-logo-templates.png"
          alt=""
        />
      </a>
    </div>
  );
};
