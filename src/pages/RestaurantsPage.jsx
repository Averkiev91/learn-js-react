import { useSelector } from 'react-redux';
import { useRequest } from '../redux/hooks/useRequest';
import { getRestaurants } from '../redux/entities/restaurants/getRestaurants';
import { selectRestaurantsIds } from '../redux/entities/restaurants/restaurantsSlice';
import { Outlet } from 'react-router';
import RestaurantNavigation from '../components/RestaurantNavigation/RestaurantNavigation';

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector((state) => selectRestaurantsIds(state));

  switch (requestStatus) {
    case 'pending':
      return (
        <main>
          <p>Загрузка</p>
        </main>
      );
    case 'rejected':
      return (
        <main>
          <p>Ошибка</p>
        </main>
      );
    default:
      if (!restaurantsIds.length) {
        return (
          <main>
            <p>Ресторанов нет</p>
          </main>
        );
      }

      return (
        <>
          <nav style={{ display: 'flex', gap: '10px' }}>
            {restaurantsIds.map((restaurantId) => (
              <RestaurantNavigation key={restaurantId} restaurantId={restaurantId} />
            ))}
          </nav>
          <main>
            <Outlet />
          </main>
        </>
      );
  }
};
