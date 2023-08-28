import React from 'react';
import "./Techs.css"

const Techs = () => {
    return (
        <section className="techs" id="techs">
            <h2 className="techs__header">Технологии</h2>
            <div className="techs__wrapper">
                <h3 className="techs__title">7 технологий</h3>
                <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в
                    дипломном проекте.</p>
            </div>
            <ul className="techs__wrapper-techs">
                <li className="techs__block">HTML</li>
                <li className="techs__block">CSS</li>
                <li className="techs__block">JS</li>
                <li className="techs__block">React</li>
                <li className="techs__block">Git</li>
                <li className="techs__block">Express.js</li>
                <li className="techs__block">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;