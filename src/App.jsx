import React from 'react';
import Layout from './components/layout/Layout';
import RestaurantsContainer from './components/restaurant/RestaurantsContainer';

const App = () => {
  return (
    <Layout title='Рестораны'>
      <RestaurantsContainer />
    </Layout>
  );
};

export default App;
