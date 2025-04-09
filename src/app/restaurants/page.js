"use client"

import RestaurantNavigation from '../../components/RestaurantNavigation/RestaurantNavigation';
import { useGetRestaurantsQuery } from '../../redux/services/api';

const RestaurantsPage = () => {
  const { data: restaurants, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return (
      <main>
        <p>Загрузка</p>
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <p>Ошибка</p>
      </main>
    );
  }

  if (restaurants?.length === 0) {
    return (
      <main>
        <p>Ресторанов нет</p>
      </main>
    );
  }

  return (
    <>
      <nav style={{ display: 'flex', gap: '10px' }}>
        {restaurants.map((restaurant) => (
          <RestaurantNavigation key={restaurant.id} restaurant={restaurant} />
        ))}
      </nav>
      <main>
      </main>
    </>
  );
};

export default RestaurantsPage;
