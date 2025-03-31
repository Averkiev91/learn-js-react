import React from 'react';

import 'normalize.css';
import './styles/global.css';
import './styles/variables.css';

import { Provider } from 'react-redux';
import { store } from './store/store';

import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
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
                <Route path='/restaurant' element={<RestaurantPage />}>
                  <Route path=':restaurantId' element={<Outlet />}>
                    <Route index element={<RestaurantPage />} />
                    <Route path='menu' element={<MenuPage />} />
                    <Route path='reviews' element={<ReviewsPage />} />
                  </Route>
                </Route>
                <Route path='/dish/:dishId' element={<DishPage />} />
              </Route>
              <Route
                path='about'
                element={
                  <div>
                    about - <Outlet />
                  </div>
                }
              >
                <Route path='*' element={<div>not found about</div>} />
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
