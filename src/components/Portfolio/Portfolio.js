import React from 'react';
import {Link} from "react-router-dom";
import arrow from "../../images/arrow.svg"
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className="portfolio__header">Портфолио</h2>
            <ul className="portfolio__list">
                <li className="portfolio__wrapper">
                    <h3 className="portfolio__website">Статичный сайт</h3>
                    <div className="portfolio__link-wrapper">
                        <Link to="https://zvereva-oksana.github.io/how-to-learn/" target="_blank"><img
                            className="portfolio__link" src={arrow} alt="белая стрелка"/></Link>
                    </div>
                </li>
                <li className="portfolio__wrapper">
                    <h3 className="portfolio__website">Адаптивный сайт</h3>
                    <div className="portfolio__link-wrapper">
                        <Link to="https://zvereva-oksana.github.io/russian-travel/" target="_blank"><img
                            className="portfolio__link" src={arrow} alt="белая стрелка"/></Link>
                    </div>
                </li>
                <li className="portfolio__wrapper portfolio__wrapper_no-border">
                    <h3 className="portfolio__website portfolio__website_last">Одностраничное приложение</h3>
                    <div className="portfolio__link-wrapper portfolio__link-wrapper_last">
                        <Link to="https://zvereva-oksana.github.io/react-mesto-auth/" target="_blank"><img
                            className="portfolio__link" src={arrow} alt="белая стрелка"/></Link>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Portfolio;