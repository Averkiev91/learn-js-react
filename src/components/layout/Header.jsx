import React from 'react';
import { useTheme } from '../../hooks/useTheme';
import { useUser } from '../../hooks/useUser';
import ThemeToggleButton from './ThemeToggleButton';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();

  return (
    <header>
      <div>
        <nav>
          <a href='/'>Главная</a>
        </nav>
        <div>
          <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
          {user ? <UserPanel user={user} onLogout={logout} /> : <LoginForm onLogin={login} />}
        </div>
      </div>
    </header>
  );
};

export default Header;
