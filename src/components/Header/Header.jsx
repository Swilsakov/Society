import React from 'react';
import style from './header.module.css';
import image from './logo111.png'
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src={image} alt='img' />
      <div className={style.login__block}>
        {props.isAuth ? props.login :
          <NavLink to={'/login'} >Login</NavLink>}
      </div>
    </header>
  )
};

export default Header;