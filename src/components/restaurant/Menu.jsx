const Menu = ({ menu }) => {
  return (
    <ul>
      <li>{`Name: ${menu.name}`}</li>
      <li>{`Price: ${menu.price}`}</li>
      <li>{`Ingredients: ${menu.ingredients}`}</li>
    </ul>
  );
};

export default Menu;
