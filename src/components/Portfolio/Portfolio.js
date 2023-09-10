import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list">
        <li className="portfolio__wrapper">
          <Link
            to="https://zvereva-oksana.github.io/how-to-learn/"
            target="_blank"
            className="portfolio__link-wrapper"
          >
            <h3 className="portfolio__website">Статичный сайт</h3>
            <div className="portfolio__img-wrapper">
              <img className="portfolio__img" src={arrow} alt="белая стрелка" />
            </div>
          </Link>
        </li>
        <li className="portfolio__wrapper">
          <Link
            to="https://zvereva-oksana.github.io/russian-travel/"
            target="_blank"
            className="portfolio__link-wrapper"
          >
            <h3 className="portfolio__website">Адаптивный сайт</h3>
            <div className="portfolio__img-wrapper">
              <img className="portfolio__img" src={arrow} alt="белая стрелка" />
            </div>
          </Link>
        </li>
        <li>
          <Link
            to="https://zvereva-oksana.github.io/react-mesto-auth/"
            target="_blank"
            className="portfolio__link-wrapper portfolio__link-wrapper_last"
          >
            <h3 className="portfolio__website">Одностраничное приложение</h3>
            <div className="portfolio__img-wrapper">
              <img className="portfolio__img" src={arrow} alt="белая стрелка" />
            </div>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
