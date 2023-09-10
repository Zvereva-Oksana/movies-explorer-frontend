import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './FormRegisterAndLogin.css';

function FormRegisterAndLogin({
  header,
  nameForm,
  autoComplete,
  nameButton,
  children,
  registrationQuestion,
  route,
  linkName,
  errorAfterSendingRequest,
  valueEmail,
  valuePassword,
  onChange,
  onSubmitForm,
  errorsValidationEmail,
  errorsValidationPassword,
  isValid,
}) {
  const currentPath = window.location.pathname;

  return (
    <section className="registration">
      <div className="registration__wrapper">
        <img src={logo} className="header__logo header__logo_no-button" alt="Логотип в виде зеленого кольца" />
        <h2 className="registration__heading">{header}</h2>
        <form onSubmit={onSubmitForm} name={nameForm} className="form" autoComplete="off">
          <fieldset className="form__input-container">
            {children}
            <div className="form__block-wrapper">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="form__label" htmlFor="email">E-mail</label>
              <div className="form__input-wrapper">
                <input
                  className="form__input"
                  id="email"
                  name="email"
                  type="email"
                  value={valueEmail}
                  onChange={onChange}
                  autoComplete={autoComplete}
                  required
                />
              </div>
            </div>
            <div className="profile__wrapper-error profile__wrapper-error_left">
              <span className="profile__error-text">{errorsValidationEmail}</span>
            </div>
            <div className="form__block-wrapper">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="form__label" htmlFor="password">Пароль</label>
              <div className="form__input-wrapper">
                <input
                  className={`form__input ${
                    (errorAfterSendingRequest.length > 0 && currentPath === '/signup') ? 'form__input_color' : ''}`}
                  id="password"
                  name="password"
                  type="password"
                  value={valuePassword}
                  onChange={onChange}
                  autoComplete={autoComplete}
                  required
                />
              </div>
            </div>
            <div className="profile__wrapper-error profile__wrapper-error_left">
              <span className="profile__error-text">{errorsValidationPassword}</span>
            </div>
          </fieldset>
          <div>
            <span className={`form__err ${
              errorAfterSendingRequest.length > 0 ? 'form__err_add' : ''}`}
            >
              {errorAfterSendingRequest}
            </span>
            <button
              type="submit"
              disabled={!isValid || errorAfterSendingRequest.length > 0}
              className="form__button"
            >
              {nameButton}
            </button>
          </div>
        </form>
        <div className="registration__footer">
          <p className="registration__question">{registrationQuestion}</p>
          <Link to={route} className="registration__link">{linkName}</Link>
        </div>
      </div>
    </section>
  );
}

export default FormRegisterAndLogin;
