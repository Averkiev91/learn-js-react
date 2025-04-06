import { useParams } from 'react-router';
import Restaurant from '../components/Restaurant/Restaurant';
import { useGetRestaurantByIdQuery } from '../redux/services/api';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { data: restaurant, isLoading, isError } = useGetRestaurantByIdQuery(restaurantId);

  if (isLoading) {
    return (
      <div>
        <p>Загрузка</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <p>Ошибка</p>
      </div>
    );
  }

  return <Restaurant restaurant={restaurant} />;
};
