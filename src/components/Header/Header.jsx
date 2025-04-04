import React from 'react';
import { Link } from 'react-router';
import ThemeToggleButton from '../ToggleButton/ThemeToggleButton';
import LoginForm from '../Loginform/LoginForm';
import UserPanel from '../UserPanel/UserPanel';
import { useUser } from '../../hooks/useUser';
import styles from '../Layout/layout.module.css';

const Header = () => {
  const { user } = useUser();

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <Link to='/'>Главная</Link>
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
