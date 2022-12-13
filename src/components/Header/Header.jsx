import React from 'react';
import s from './header.module.css';
import image from './logo111.png'

const Header = () => {
  return (
    <header className={s.header}>
      <img src={image} alt='img'/>
    </header>
  )
};

export default Header;