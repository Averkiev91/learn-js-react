import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const useRestaurantTabs = (id) => {
  const { ids, entities } = useSelector((state) => state.restaurants);
  const navigate = useNavigate();

  const [activeRestaurantId, setActiveRestaurantId] = useState(id || ids[0]);

  const handleRestaurantClick = useCallback(
    (restaurantId) => {
      setActiveRestaurantId(restaurantId);
      navigate(`/restaurant/${restaurantId}`);
    },
    [navigate]
  );

  return {
    ids,
    entities,
    activeRestaurantId,
    handleRestaurantClick,
  };
};

export default useRestaurantTabs;
