import React from 'react';
import 'normalize.css';
import './styles/global.css';
import Layout from './components/Layout/Layout';
import RestaurantsContainer from './components/Restaurant/RestaurantsContainer';

const App = () => {
  return (
    <Layout title='Рестораны'>
      <RestaurantsContainer />
    </Layout>
  );
};

export default App;
