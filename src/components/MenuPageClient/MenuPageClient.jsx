"use client";

import React from 'react';
import { useGetDishesByRestaurantIdQuery } from '../../redux/services/api';
import Menu from '../Menu/Menu';
import LoadErrorDisplay from '../LoadErrorDisplay/LoadErrorDisplay';

const MenuPageClient = ({ restaurantId }) => {
  const { data: menu, isLoading, isError } = useGetDishesByRestaurantIdQuery(restaurantId);

  return (
    <LoadErrorDisplay data={menu} isLoading={isLoading} isError={isError}>
      <Menu menu={menu} />
    </LoadErrorDisplay>
  );
};

export default MenuPageClient; 