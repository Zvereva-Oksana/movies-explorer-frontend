import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";
import "./FormRegisterAndLogin.css"

const FormRegisterAndLogin = ({
                                  header,
                                  nameForm,
                                  autoComplete,
                                  nameButton,
                                  children,
                                  registrationQuestion,
                                  route,
                                  linkName,
                                  error,
                              }) => {
    const currentPath = window.location.pathname;
    return (
        <section className="registration">
            <div className="registration__wrapper">
                <img src={logo} className="header__logo " alt="Логотип в виде зеленого кольца"/>
                <h2 className="registration__heading">{header}</h2>
                <form name={nameForm} className="form" autoComplete="off">
                    <fieldset className="form__input-container">
                        {children}
                        <div className="form__block-wrapper">
                            <label className="form__label" htmlFor="useremail">E-mail</label>
                            <div className='form__input-wrapper'>
                                <input
                                    className='form__input'
                                    id="useremail"
                                    name="useremail"
                                    type="email"
                                    autoComplete={autoComplete}
                                    required/>
                            </div>
                        </div>
                        <div className="form__block-wrapper">
                            <label className="form__label" htmlFor="password">Пароль</label>
                            <div className='form__input-wrapper'>
                                <input
                                    className={`form__input ${
                                        ({error} && currentPath === '/signup') ? `form__input_color` : ``}`}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete={autoComplete}
                                    required/>
                            </div>
                            <span className={`form__err ${
                                {error} ? `form__err_add` : ``}`}>{error}</span>
                        </div>
                    </fieldset>
                    <button type="submit" className="form__button">{nameButton}</button>
                </form>
                <div className="registration__footer">
                    <p className='registration__question'>{registrationQuestion}</p>
                    <Link to={route} className="registration__link">{linkName}</Link>
                </div>
            </div>
        </section>
    );
}

export default FormRegisterAndLogin;