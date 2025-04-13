import React from 'react';
import Link from 'next/link';
import ThemeToggleButton from '../ToggleButton/ThemeToggleButton';
import UserSection from '../UserSection/UserSection';
import styles from '../Layout/layout.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <nav className={styles.headerNav}>
          <Link href='/'>Главная</Link>
        </nav>
        <div className={styles.headerActions}>
          <ThemeToggleButton />
          <UserSection />
        </div>
      </div>
    </header>
  );
};

export default Header;
