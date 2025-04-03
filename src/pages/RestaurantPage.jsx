import { useParams } from 'react-router';
import Restaurant from '../components/Restaurant/Restaurant';

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  return (
    <>
      <Restaurant restaurantId={restaurantId} />
    </>
  );
};
