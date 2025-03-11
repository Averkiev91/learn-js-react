import React from 'react';
import { restaurants } from '../materials/mock.js';
import Restaurant from './components/restaurant/RestaurantComponent';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout title='Рестораны'>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </Layout>
  );
};

export default App;
