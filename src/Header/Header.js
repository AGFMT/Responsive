import React from 'react';
import './Header.css';
import plogo from './plogo.jpg';

const Header = () => {
  return (
    <div className='header-parent'>
      <div className='logo-block'>
        <img src={plogo} alt="" />
      </div>
    </div>
  );
};

export default Header;
