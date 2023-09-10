import React, { useEffect, useState } from 'react';
import './NavigationMobile.css';
import { Link } from 'react-router-dom';
import iconMain from '../../images/icon-main.svg';

function NavigationMobile() {
  const currentPath = window.location.pathname;
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
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
    isOpen
      ? (
        <div className="popup">
          <div className={`popup__container ${
            currentPath === '/' ? 'popup__container_color' : ''}`}
          >
            <button
              type="button"
              className={`popup__close-icon ${
                currentPath === '/' ? 'popup__close-icon_color' : ''}`}
              onClick={toggleMenu}
            />
            <div className="popup__link-wrapper">
              <Link to="/" className="popup__link" onClick={() => setOpen(false)}>Главная</Link>
              <Link
                to="/movies"
                className={`popup__link ${
                  activeMovie === 'movies' ? 'popup__link_border' : ''}`}
                onClick={() => setOpen(false)}
              >
                Фильмы
              </Link>
              <Link
                to="/saved-movies"
                className={`popup__link ${
                  activeMovie === 'saved-movies' ? 'popup__link_border' : ''}`}
                onClick={() => setOpen(false)}
              >
                Сохранённые фильмы
              </Link>
            </div>
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className={`navigation__link-profile navigation__link-profile_indention ${
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
        </div>
      )
      : (
        <div className={`navigation navigation_position ${
          currentPath === '/' ? 'navigation_color' : ''}`}
        >
          <button
            type="button"
            className={`header__burger-icon ${
              currentPath === '/' ? 'header__burger-icon_color' : ''}`}
            onClick={toggleMenu}
          />
        </div>
      )

  );
}

export default NavigationMobile;
