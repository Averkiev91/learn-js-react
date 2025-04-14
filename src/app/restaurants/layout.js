import RestaurantLayoutClient from '../../components/RestaurantLayoutClient/RestaurantLayoutClient';
import { Suspense } from 'react';
import { getRestaurants } from '../../services/getRestaurants';

const RestaurantsLayout = async ({ children }) => {
  const restaurants = await getRestaurants();
  return (
    <Suspense fallback={<div>Загрузка ресторанов...</div>}>
      <RestaurantLayoutClient restaurants={restaurants}>{children}</RestaurantLayoutClient>
    </Suspense>
  );
};

export default RestaurantsLayout;
