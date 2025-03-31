import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Name from '../Name/Name';
import ReviewItemsContainer from '../Review/ReviewsContainer';
import MenuItemContainer from '../Menu/MenuItemContainer';
import { selectRestaurantById } from '../../store/slices/restaurantsSlice';

const RestaurantComponent = ({ restaurantId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));
  const [activeTab, setActiveTab] = useState('menu');

  if (!restaurant) return null;

  return (
    <div>
      <Name name={restaurant.name} />

      <div>
        <button onClick={() => setActiveTab('menu')}>Меню</button>
        <button onClick={() => setActiveTab('reviews')}>Отзывы</button>
      </div>

      {activeTab === 'menu' && (
        <div>
          <h3>Меню:</h3>
          {restaurant.menu.map((dishId) => (
            <MenuItemContainer key={dishId} dishId={dishId} />
          ))}
        </div>
      )}

      {activeTab === 'reviews' && (
        <div>
          <h3>Отзывы:</h3>
          <ul>
            {restaurant.reviews.map((reviewId) => (
              <ReviewItemsContainer key={reviewId} reviewId={reviewId} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RestaurantComponent;
