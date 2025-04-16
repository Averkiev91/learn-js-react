import React from 'react';
import RestaurantNavigation from '../RestaurantNavigation/RestaurantNavigation';
import styles from './RestaurantLayoutClient.module.css';


const RestaurantLayoutClient = ({ children, restaurants }) => {
  return (
    <>
      <nav className={styles.flex}>
        {restaurants.map((restaurant) => (
          <RestaurantNavigation key={restaurant.id} restaurant={restaurant} />
        ))}
        {restaurants.length === 0 && <p>Ресторанов нет</p>}
      </nav>
      <main>{children}</main>
    </>
  );
};

export default RestaurantLayoutClient;
