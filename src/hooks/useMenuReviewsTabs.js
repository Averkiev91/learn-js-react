import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const useMenuReviewsTabs = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (tab === 'menu') {
      navigate(`/restaurant/${restaurantId}/menu`);
    } else if (tab === 'reviews') {
      navigate(`/restaurant/${restaurantId}/reviews`);
    }
  };

  return {
    handleTabChange,
    isMenuActive: activeTab === 'menu',
    isReviewsActive: activeTab === 'reviews',
  };
};

export default useMenuReviewsTabs;
