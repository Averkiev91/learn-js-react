import React, { useState } from 'react';
import { restaurants } from '../materials/mock.js';
import Restaurant from './components/restaurant/RestaurantComponent';
import Layout from './components/layout/Layout';

const App = () => {
  const [restaurant, setRestaurant] = useState(restaurants[0]);

  return (
    <Layout title='Рестораны'>
      <>
        {restaurants.map((restaurant) => (
          <button key={restaurant.id} onClick={() => setRestaurant(restaurant)}>
            {restaurant.name}
          </button>
        ))}
      </>
      <>
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      </>
    </Layout>
  );
};

export default App;
