import React, { useState, useCallback } from 'react';

const LoginForm = ({ onLogin }) => {
  const [inputName, setInputName] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = useCallback((e) => {
    setInputName(e.target.value);
    setError('');
  }, []);

  const handleLogin = useCallback(() => {
    if (inputName.trim()) {
      const success = onLogin(inputName);
      if (!success) {
        setError('Пользователь не найден');
      }
    } else {
      setError('Введите имя');
    }
  }, [inputName, onLogin]);

  return (
    <div>
      <input type='text' value={inputName} onChange={handleInputChange} placeholder='Введите имя' />
      <button onClick={handleLogin}>Войти</button>
      {error && <span style={{ color: 'red', marginLeft: '10px' }}>{error}</span>}
    </div>
  );
};

export default React.memo(LoginForm);
