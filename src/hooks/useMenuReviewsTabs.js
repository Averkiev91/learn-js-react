import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';

const useMenuReviewsTabs = () => {
  const [activeTab, setActiveTab] = useState('menu');
  const navigate = useNavigate();
  const { restaurantId } = useParams();

  useEffect(() => {
    if (!restaurantId) return;

    if (location.pathname.includes('/menu')) {
      setActiveTab('menu');
    } else if (location.pathname.includes('/reviews')) {
      setActiveTab('reviews');
    }
  }, [restaurantId]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    if (!restaurantId) {
      return;
    }

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
