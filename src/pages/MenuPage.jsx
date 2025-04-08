import { useParams } from 'react-router';
import Menu from '../components/Menu/Menu';
import { useGetDishesByRestaurantIdQuery } from '../redux/services/api';

export const MenuPage = () => {
  const { restaurantId } = useParams();
  const { data: menu, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId);

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

  return menu?.length > 0 ? (
    <Menu menu={menu} />
  ) : (
    <div>
      <p>Меню пока не добавлено</p>
    </div>
  );
};
