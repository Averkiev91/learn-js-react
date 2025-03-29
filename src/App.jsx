import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'normalize.css';
import './styles/global.css';
import './styles/variables.css';
import Layout from './components/Layout/Layout';
import { ThemeProvider } from './context/ThemeProvider';
import { UserProvider } from './context/UserProvider';
import RestaurantsTabs from './components/Restaurant/RestaurantsTabs';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout title='Рестораны'>
            <RestaurantsTabs />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
