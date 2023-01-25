import React from 'react';
import loader from '../../../assets/loader.gif';
import classes from './preloader.module.css'

const Preloader = () => {
  return (
    <div className={classes.preloader__wrapper}>
      <img src={loader} alt='loader' />
    </div>
  )
};

export default Preloader;