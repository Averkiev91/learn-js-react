"use client";

import { useParams } from "next/navigation";
import Restaurant from '../../../components/Restaurant/Restaurant';
import { useGetRestaurantByIdQuery } from '../../../redux/services/api';

const RestaurantPage = ({ children }) => {
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

  return (
    <>
      <Restaurant restaurant={restaurant} />
      {children}
    </>
  );
};

export default RestaurantPage;
