import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'normalize.css';
import './styles/global.css';
import './styles/variables.css';
import Layout from './components/Layout/Layout';
import RestaurantsContainer from './components/Restaurant/RestaurantsContainer';
import { ThemeProvider } from './context/ThemeProvider';
import { UserProvider } from './context/UserProvider';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <Layout title='Рестораны'>
            <RestaurantsContainer />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
