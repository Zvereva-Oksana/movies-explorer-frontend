import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import iconMain from '../../images/icon-main.svg';
import './Navigation.css';

function Navigation({ isLoggedIn }) {
  const currentPath = window.location.pathname;
  const [activeMovie, setActiveMovie] = useState('');

  useEffect(() => {
    if (currentPath.includes('/movies')) {
      setActiveMovie('movies');
    } else if (currentPath.includes('/saved-movies')) {
      setActiveMovie('saved-movies');
    } else {
      setActiveMovie('');
    }
  }, [currentPath]);

  return (
    isLoggedIn
      ? (
        <div className={`navigation ${
          currentPath === '/' ? 'navigation_color' : ''}`}
        >
          <div className="navigation__wrapper-authorized">
            <Link
              to="/movies"
              className={`navigation__link-movies ${
                activeMovie === 'movies' ? 'navigation__link-movies_L' : ''}`}
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={`navigation__link-movies ${
                activeMovie === 'saved-movies' ? 'navigation__link-movies_L' : ''}`}
            >
              Сохранённые фильмы
            </Link>
          </div>
          <Link
            to="/profile"
            className={`navigation__link-profile ${
              currentPath === '/' ? 'navigation__link-profile_color' : ''}`}
          >
            <p className="navigation__link-name">Аккаунт</p>
            <div className={`navigation__wrapper-logo ${
              currentPath === '/' ? 'navigation__wrapper-logo_color' : ''}`}
            >
              <img
                src={iconMain}
                className="navigation__logo-main"
                alt="Логотип в виде профиля головы человека белого цвета"
              />
            </div>
          </Link>
        </div>
      )
      : (
        <div className="navigation__wrapper">
          <Link to="/signup" className="navigation__link">Регистрация</Link>
          <Link to="/signin" className="navigation__link-enter">Войти</Link>
        </div>
      )
  );
}

export default Navigation;
