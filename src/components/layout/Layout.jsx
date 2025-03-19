import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProgressBar from '../ProgressBar/ProgressBar';

const Layout = ({ title, children }) => {
  return (
    <div>
      <ProgressBar />
      <Header />
      <h1>{title}</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
