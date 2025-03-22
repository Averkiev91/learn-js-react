import React, { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useUser } from '../../hooks/useUser';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();
  const [inputName, setInputName] = useState('');

  const handleLogin = () => {
    if (inputName.trim()) {
      const success = login(inputName);
      if (!success) {
        alert('Пользователь не найден');
      }
    }
  };

  return (
    <header>
      <div>
        <nav>
          <a href='/'>Главная</a>
        </nav>
        <div>
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}
          </button>

          {user ? (
            <div>
              <span>Привет, {user.name}</span>
              <button onClick={logout}>Выйти</button>
            </div>
          ) : (
            <div>
              <input
                type='text'
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder='Введите имя'
              />
              <button onClick={handleLogin}>Войти</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
