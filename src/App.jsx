import React from 'react';
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
