"use client";

import { useParams } from "next/navigation";
import DishCounter from '../../../components/DishCounter/DishCounter';
import Dish from '../../../components/Dish/Dish';
import { useGetDishByDishIdQuery } from '../../../redux/services/api';

const DishPage = () => {
  const { dishId } = useParams();
  const { data: dish, isLoading, isError } = useGetDishByDishIdQuery(dishId);

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

  return (
    <div>
      <p>{`Количество блюд:`}</p>
      <Dish dish={dish} />
      <DishCounter dishId={dishId} />
    </div>
  );
};

export default DishPage;
