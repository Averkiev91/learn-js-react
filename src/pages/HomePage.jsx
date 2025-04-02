import React from 'react';
import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <div>
      <p>Добро пожаловать!</p>
      <Link to='/restaurants'>Перейти к ресторану</Link>
    </div>
  );
};
