import React from 'react';
import "./NavTab.css"

const NavTab = () => {
    return (
        <ul className="navigat">
            <li><a href="#about-project" className="navigat__link">О проекте</a></li>
            <li><a href="#techs" className="navigat__link">Технологии</a></li>
            <li><a href="#about-me" className="navigat__link">Студент</a></li>
        </ul>
    );
}

export default NavTab;