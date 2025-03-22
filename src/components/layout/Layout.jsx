import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProgressBar from '../ProgressBar/ProgressBar';
import { useTheme } from '../../hooks/useTheme';

const Layout = ({ title, children }) => {
  const { theme } = useTheme();
  return (
    <div data-theme={theme}>
      <ProgressBar />
      <Header />
      <h1>{title}</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
