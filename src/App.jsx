import React from 'react';
import 'normalize.css';
import './styles/global.css';
import Layout from './components/Layout/Layout';
import RestaurantsContainer from './components/Restaurant/RestaurantsContainer';
import { ThemeProvider } from './context/ThemeProvider';
import { UserProvider } from './context/UserProvider';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout title='Рестораны'>
          <RestaurantsContainer />
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
