import React from 'react';
import ThemeToggleButton from './ThemeToggleButton';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';
import { useUser } from '../../hooks/useUser';
import styles from './layout.module.css';

const Header = () => {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <a href='/'>Главная</a>
        </nav>
        <div className={styles.headerActions}>
          <ThemeToggleButton />
          {user ? <UserPanel /> : <LoginForm />}
        </div>
      </div>
    </header>
  );
};

export default Header;
