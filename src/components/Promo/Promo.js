import React from 'react';
import landing_logo from "../../images/landing-logo.svg"
import './Promo.css';

const Promo = () => {
    return (
        <section className="promo">
            <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={landing_logo} className="promo__logo" alt="Буква П, вставленная в разлинованный квадрат"/>
        </section>
    );
}

export default Promo;