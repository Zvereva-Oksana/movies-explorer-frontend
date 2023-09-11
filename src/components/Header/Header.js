import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import NavigationMobile from '../NavigationMobile/NavigationMobile';

function Header({ isLoggedIn, isMobile }) {
  const location = useLocation();

  return (
    <header className={`header ${
      location.pathname === '/' ? 'header_color' : ''}`}
    >
      <Link
        to="/"
        className={`header__link ${
          location.pathname === '/' ? 'header__link_disabled' : ''}`}
      >
        <img
          src={logo}
          className="header__logo"
          alt="Логотип в виде зеленого квадрата с белым кругом по середине"
        />
      </Link>
      {isMobile
        ? <NavigationMobile />
        : (
          <Navigation
            isLoggedIn={isLoggedIn}
          />
        )}
    </header>
  );
}

export default Header;
