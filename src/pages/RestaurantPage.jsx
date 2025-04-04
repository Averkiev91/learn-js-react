import { useParams } from 'react-router';
import Restaurant from '../components/Restaurant/Restaurant';
import { useRequest } from '../redux/hooks/useRequest';
import { getRestaurantById } from '../redux/entities/restaurants/getRestaurantById';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const requestStatus = useRequest(getRestaurantById, restaurantId);

  switch (requestStatus) {
    case 'pending':
      return (
        <div>
          <p>Загрузка</p>
        </div>
      );
    case 'rejected':
      return (
        <div>
          <p>Ошибка</p>
        </div>
      );
    default:
      return (
        <>
          <Restaurant restaurantId={restaurantId} />
        </>
      );
  }
};
