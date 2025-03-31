import { useParams } from 'react-router';
import RestaurantMenu from '../components/Restaurant/RestaurantMenu';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const menuItems = location.state?.menuItems;

  return (
    <>
      {restaurantId && menuItems ? (
        <RestaurantMenu restaurantId={restaurantId} menuItems={menuItems} />
      ) : (
        <RestaurantMenu />
      )}
    </>
  );
};
