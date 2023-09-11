import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';
import foto from '../../images/my-foto.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__wrapper">
        <div className="about-me__wrapper-block">
          <div>
            <p className="about-me__title">Оксана</p>
            <p className="about-me__subtitle">Начинающий front-end разработчик, 35 лет.</p>
            <p className="about-me__article">
              {/* eslint-disable-next-line max-len */}
              Живу и работаю в Йошкар-Оле. Мне нравится изучать новые технологии, в результате, после
              получения высшего образования по специальности
              "Технология машиностроения" и получив ученую степень
              в области металлургии решила окончить
              курс "Веб-разработчик".
              Веб-разработка привлекла меня возможностью создания внешнего вида
              сайта и пользовательского интерфейса.
              При этом, мне очень нравится видеть результат своей работы
              в режиме реального времени. В
              свободное время делаю
              Pet-проекты, гуляю с собакой и читаю.
            </p>
          </div>
          <Link
            to="https://github.com/Zvereva-Oksana"
            target="_blank"
            className="about-me__link-github"
          >
            Github
          </Link>
        </div>
        <img src={foto} className="about-me__foto" alt="Фото" />
      </div>
    </section>
  );
}

export default AboutMe;
