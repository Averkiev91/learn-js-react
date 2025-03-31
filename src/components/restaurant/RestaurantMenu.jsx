import MenuItemContainer from '../Menu/MenuItemContainer';

const RestaurantMenu = ({ menuItems }) => (
  <ul>
    {menuItems.map((dishId) => (
      <MenuItemContainer key={dishId} dishId={dishId} />
    ))}
  </ul>
);

export default RestaurantMenu;
