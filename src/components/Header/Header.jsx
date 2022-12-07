import React from 'react';
import s from './header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <img src='
        https://upload.wikimedia.org/wikipedia/commons/1/13/Wattpad_logo.png
      ' alt='img'/>
    </header>
  )
};

export default Header;