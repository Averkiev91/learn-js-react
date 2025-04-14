'use client';

import Restaurant from './Restaurant';

const RestaurantLayoutPage = ({ restaurant, children }) => {
  return (
    <>
      <Restaurant restaurant={restaurant} />
      {children}
    </>
  );
};

export default RestaurantLayoutPage;
