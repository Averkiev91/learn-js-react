import React from 'react';
import { restaurants } from '../materials/mock.js';
import Restaurant from './components/RestaurantComponent.jsx';

const App = () => {
  return (
    <>
      <h1>Рестораны</h1>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </>
  );
};

export default App;
