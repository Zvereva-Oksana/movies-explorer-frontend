import React, { useEffect } from 'react';
import FormRegisterAndLogin from '../FormRegisterAndLogin/FormRegisterAndLogin';
import useFormWithValidation from '../../utils/validation';
import api from '../../utils/MainApi';

function Login({
  onLogin,
  errorLogin,
  setErrorLogin,
  navigate,
  tokenCheck,
}) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();

  useEffect(() => {
    if (errorLogin.length > 0) {
      setErrorLogin('');
    }
  }, [values]);

  const handleSubmitAuthorizeForm = (e) => {
    e.preventDefault();
    api.authorize(values).then(({ jwt }) => {
      if (!jwt) {
        return;
      }
      onLogin();
      localStorage.setItem('jwt', jwt);
      navigate('/movies');
      tokenCheck();
      setErrorLogin('');
      resetForm();
    }).catch(({ message }) => {
      setErrorLogin(message);
    });
  };

  return (
    <FormRegisterAndLogin
      header="Рады видеть!"
      nameForm="login"
      autoComplete="on"
      nameButton="Войти"
      registrationQuestion="Ещё не зарегистрированы?"
      route="/signup"
      linkName="Регистрация"
      onSubmitForm={handleSubmitAuthorizeForm}
      errorAfterSendingRequest={errorLogin}
      errorsValidationPassword={errors.password}
      errorsValidationEmail={errors.email}
      onChange={handleChange}
      valueEmail={values.email || ''}
      valuePassword={values.password || ''}
      isValid={isValid}
    />
  );
}

export default Login;
