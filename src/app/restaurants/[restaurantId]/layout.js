import RestaurantLayoutClient from "../../../components/Restaurant/RestaurantLayoutClient";

const RestaurantLayout = ({ children }) => {
  return (
    <RestaurantLayoutClient>
      {children}
    </RestaurantLayoutClient>
  );
};

export default RestaurantLayout;
