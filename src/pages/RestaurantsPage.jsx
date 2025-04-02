import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectRestaurantsIds } from '../store/slices/restaurantsSlice';
import { Outlet, useNavigate, useLocation } from 'react-router';
import RestaurantNavigation from '../components/RestaurantNavigation/RestaurantNavigation';

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector((state) => selectRestaurantsIds(state));
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/restaurants' && restaurantsIds.length > 0) {
      navigate(`/restaurants/${restaurantsIds[0]}`);
    }
  }, [restaurantsIds, location.pathname, navigate]);

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
};
