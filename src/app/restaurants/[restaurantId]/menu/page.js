"use client";

import { useParams } from "next/navigation";
import Menu from '../../../../components/Menu/Menu';
import { useGetDishesByRestaurantIdQuery } from '../../../../redux/services/api';

const MenuPage = () => {
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

export default MenuPage;
