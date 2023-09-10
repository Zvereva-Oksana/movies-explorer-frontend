import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__wrapper">
        <p className="footer__copy-link footer__copy-link_color">
          &copy;
          {new Date().getFullYear()}
        </p>
        <div className="footer__wrapper-block">
          <Link
            to="https://practicum.yandex.ru/"
            target="_blank"
            className="footer__copy-link footer__copy-link_hover"
          >
            Яндекс.Практикум
          </Link>
          <Link
            to="https://github.com/Zvereva-Oksana"
            target="_blank"
            className="footer__copy-link footer__copy-link_hover"
          >
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
