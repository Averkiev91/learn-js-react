import React, { useState } from 'react';
import { restaurants } from '../materials/mock.js';
import Restaurant from './components/restaurant/RestaurantComponent';
import RestaurantsPage from './components/restaurant/RestaurantsPage';
import Layout from './components/layout/Layout';

const App = () => {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  return (
    <Layout title='Рестораны'>
      <RestaurantsPage restaurants={restaurants} setRestaurant={setRestaurant}></RestaurantsPage>
      <Restaurant key={restaurant.id} restaurant={restaurant} />
    </Layout>
  );
};

export default App;
