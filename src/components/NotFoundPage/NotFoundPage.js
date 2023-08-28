import React from 'react';
import {Link} from "react-router-dom";
import "./NotFoundPage.css"

const NotFoundPage = () => {
    return (
        <section className="error">
            <h2 className="error__header">404</h2>
            <p className="error__text">Страница не найдена</p>
            <Link to="/" className="error__link-back">Назад</Link>
        </section>
    )
}

export default NotFoundPage;