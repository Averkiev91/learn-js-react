import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { useRequest } from '../redux/hooks/useRequest';
import { getRestaurantMenu } from '../redux/entities/restaurants/getRestaurantMenu';
import { selectRestaurantMenu } from '../redux/entities/restaurants/restaurantsSlice';
import Menu from '../components/Menu/Menu';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const requestStatusRestaurantMenu = useRequest(getRestaurantMenu, restaurantId);

  const menu = useSelector((state) => selectRestaurantMenu(state, restaurantId));

  switch (requestStatusRestaurantMenu) {
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
      return menu && menu.length > 0 ? (
        <Menu menu={menu} />
      ) : (
        <div>
          <p>Меню пока не добавлено</p>
        </div>
      );
  }
};
