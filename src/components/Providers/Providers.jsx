"use client";

import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import { ThemeProvider } from '../../context/ThemeProvider';
import { UserProvider } from '../../context/UserProvider';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          {children}
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default Providers; 