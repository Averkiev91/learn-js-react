import React from 'react';

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme}>{theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}</button>
  );
};

export default React.memo(ThemeToggleButton);
