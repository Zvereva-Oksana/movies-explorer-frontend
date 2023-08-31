import React from 'react';
import FormRegisterAndLogin from "../FormRegisterAndLogin/FormRegisterAndLogin";

const Login = ({errorLogin}) => {

    return (
        <FormRegisterAndLogin
            header='Рады видеть!'
            nameForm='login'
            autoComplete='on'
            nameButton='Войти'
            registrationQuestion='Ещё не зарегистрированы?'
            route='/signup'
            linkName='Регистрация'
            error={errorLogin}
        />
    );
}

export default Login;
