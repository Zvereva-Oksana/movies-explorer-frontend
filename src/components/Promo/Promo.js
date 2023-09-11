import React from 'react';
import landingLogo from '../../images/landing-logo.svg';
import './Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
      <img src={landingLogo} className="promo__logo" alt="Буква П, вставленная в разлинованный квадрат" />
    </section>
  );
}

export default Promo;
