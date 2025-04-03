import React from 'react';

import 'normalize.css';
import './styles/global.css';
import './styles/variables.css';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter, Navigate, Route, Routes, Outlet } from 'react-router';
import { HomePage } from './pages/HomePage';
import { RestaurantsPage } from './pages/RestaurantsPage';
import { RestaurantPage } from './pages/RestaurantPage';
import { DishPage } from './pages/DishPage';
import { MenuPage } from './pages/MenuPage';
import { ReviewsPage } from './pages/ReviewsPage';

import Layout from './components/Layout/Layout';
import { ThemeProvider } from './context/ThemeProvider';
import { UserProvider } from './context/UserProvider';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout title='Рестораны' />}>
                <Route index element={<HomePage />} />
                <Route path='/restaurants' element={<RestaurantsPage />}>
                  <Route path=':restaurantId' element={<RestaurantPage />}>
                    <Route path='menu' element={<MenuPage />} />
                    <Route path='reviews' element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path='/dish/:dishId' element={<DishPage />} />
              </Route>
              <Route path='*' element={<Navigate to='/' replace />} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
