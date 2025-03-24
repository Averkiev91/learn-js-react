import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useTheme } from '../../hooks/useTheme';
import styles from './layout.module.css';

const Layout = ({ title, children }) => {
  const { theme } = useTheme();
  return (
    <div className={styles.container} data-theme={theme}>
      <ProgressBar />
      <Header />
      <h1>{title}</h1>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
