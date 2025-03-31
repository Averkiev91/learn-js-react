import { useParams } from 'react-router';
import RestaurantMenu from '../components/Restaurant/RestaurantMenu';

export const MenuPage = () => {
  const { menuId } = useParams();

  return <>{menuId ? <RestaurantMenu menuId={menuId} /> : <RestaurantMenu />}</>;
};
