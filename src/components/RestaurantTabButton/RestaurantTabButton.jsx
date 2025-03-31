import React from 'react';
import classNames from 'classnames';
import styles from './restaurantTabButton.module.css';

const RestaurantTabButton = ({ restaurantId, activeRestaurantId, name, onClick }) => {
  const isActive = restaurantId === activeRestaurantId;

  const buttonClasses = classNames(styles.button, {
    [styles.buttonActive]: isActive,
    [styles.buttonInactive]: !isActive,
  });

  return (
    <button className={buttonClasses} onClick={() => onClick(restaurantId)}>
      {name}
    </button>
  );
};

export default RestaurantTabButton;
