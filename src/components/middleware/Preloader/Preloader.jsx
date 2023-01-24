import React from 'react';
import loader from '../../../assets/loader.gif';

const Preloader = () => {
  return (
    <div>
      <img src={loader} alt='loader' />
    </div>
  )
}

export default Preloader