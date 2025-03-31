import { useState } from 'react';

const useMenuTabs = () => {
  const [activeTab, setActiveTab] = useState('menu');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return {
    handleTabChange,
    isMenuActive: activeTab === 'menu',
    isReviewsActive: activeTab === 'reviews',
  };
};

export default useMenuTabs;
