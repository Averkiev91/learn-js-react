import React from 'react';
import { useLoginForm } from '../../hooks/useLoginForm';
import '../../styles/global.css';

const LoginForm = () => {
  const { inputName, error, handleInputChange, handleLogin } = useLoginForm();

  return (
    <div>
      <input type='text' value={inputName} onChange={handleInputChange} placeholder='Введите имя' />
      <button onClick={handleLogin}>Войти</button>
      {error && <span className='error'>{error}</span>}
    </div>
  );
};

export default LoginForm;
