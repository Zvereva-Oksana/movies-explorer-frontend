import React from 'react';
import "./Header.css"
import Navigation from "../Navigation/Navigation";
import {Link, useLocation} from "react-router-dom";
import logo from "../../images/logo.svg";
import NavigationMobile from "../NavigationMobile/NavigationMobile";

const Header = ({isLoggedIn, isMobile}) => {
    let location = useLocation();

    return (
        <header className={`header ${
            location.pathname === '/' ? `header_color` : ``}`}>
            <Link to="/">
                <img src={logo} className="header__logo"
                     alt="Логотип в виде зеленого квадрата с белым кругом по середине"/>
            </Link>
            {isMobile
                ? <NavigationMobile/>
                : <Navigation
                    isLoggedIn={isLoggedIn}
                />}
        </header>
    );
}

export default Header;