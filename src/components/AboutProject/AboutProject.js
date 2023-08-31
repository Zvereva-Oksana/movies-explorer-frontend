import React from 'react';
import "./AboutProject.css"

const AboutProject = () => {
    return (
        <section className="about-project" id="about-project">
            <h2 className="about-project__header">О проекте</h2>
            <div className="about-project__wrapper">
                <div>
                    <p className="about-project__title">Дипломный проект включал 5 этапов</p>
                    <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.</p>
                </div>
                <div>
                    <p className="about-project__title">На выполнение диплома ушло 5 недель</p>
                    <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно
                        было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className="about-project__wrapper-time">
                <div className="about-project__wrapper-backend">
                    <div className="about-project__date about-project__date_color">1 неделя</div>
                    <p className="about-project__dev">Back-end</p>
                </div>
                <div className="about-project__wrapper-frontend">
                    <div className="about-project__date">4 недели</div>
                    <p className="about-project__dev">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;