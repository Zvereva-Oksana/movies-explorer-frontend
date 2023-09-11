import { useCallback, useState } from 'react';
import { REGEX_EMAIL, REGEX_NAME } from './constant';

const useFormWithValidation = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validationName = useCallback((value) => {
    if (!REGEX_NAME.test(value)) {
      return 'Имя должно содержать только латиницу, кириллицу, пробел или дефис';
    }
    if (value.length <= 1) {
      return 'Имя должно быть не менее 2 символов';
    }
    return '';
  }, [values]);

  const validationEmail = useCallback((value) => REGEX_EMAIL.test(value), [values]);

  const handleChange = useCallback((event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;

    let validationError = '';

    if (!value) {
      validationError = 'Это поле обязательно для заполнения';
    } else if (name === 'name') {
      validationError = validationName(value);
    } else if (name === 'email') {
      validationError = validationEmail(value) ? '' : 'Не валидный email';
    }

    validationError ? setIsValid(false) : setIsValid(true);
    setErrors({ ...errors, [name]: validationError });
    setValues({ ...values, [name]: value });
  }, [values]);

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values, handleChange, errors, isValid, resetForm,
  };
};

export default useFormWithValidation;
