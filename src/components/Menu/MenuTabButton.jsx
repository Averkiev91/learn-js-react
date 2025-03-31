import MenuTabButtonItem from './MenuTabButtonItem';

const MenuReviewsTabs = ({ isMenuActive, isReviewsActive, onTabChange }) => (
  <div>
    <MenuTabButtonItem active={isMenuActive} onClick={() => onTabChange('menu')}>
      Меню
    </MenuTabButtonItem>
    <MenuTabButtonItem active={isReviewsActive} onClick={() => onTabChange('reviews')}>
      Отзывы
    </MenuTabButtonItem>
  </div>
);

export default MenuReviewsTabs;
