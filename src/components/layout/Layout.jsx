import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useTheme } from '../../redux/hooks/useTheme';
import styles from './layout.module.css';
import Cart from '../Cart/Cart';

const Layout = ({ title }) => {
  const { theme } = useTheme();
  return (
    <div className={styles.container} data-theme={theme}>
      <ProgressBar />
      <Header />
      <h1>{title}</h1>
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      <Cart />
    </div>
  );
};

export default Layout;
