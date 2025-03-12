import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ title, children }) => {
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
