"use client";

import Layout from "../Layout/Layout";

import 'normalize.css';
import '../../styles/global.css';
import '../../styles/variables.css';

import { Provider } from 'react-redux';
import { store } from '../../redux/store';

import { ThemeProvider } from '../../context/ThemeProvider';
import { UserProvider } from '../../context/UserProvider';

const App = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout>
            {children}
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
