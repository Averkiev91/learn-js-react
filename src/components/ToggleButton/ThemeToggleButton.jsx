import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>{theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}</button>
  );
};

export default ThemeToggleButton;
