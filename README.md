# 🍽️ Restaurant Web Application

## 🚀 Технологический стек

### Основные технологии

- **React** - библиотека для построения пользовательских интерфейсов
- **Redux Toolkit** - управление глобальным состоянием
- **React Router** - маршрутизация в приложении
- **RTK Query** - работа с API и кэширование данных

## 🏗️ Архитектура проекта

### Управление состоянием

#### Локальное состояние

- Использование `useReducer` для управления формами
- Преимущества:
  - Иммутабельность
  - Предсказуемость изменений
  - Изолированность логики

#### Глобальное состояние

- Использование `createSlice` для сущностей:
  - Рестораны
  - Блюда
  - Пользователи
  - Корзина
- Нормализация данных через `createEntityAdapter`

### Асинхронные операции

- `createAsyncThunk` для серверных запросов
- `RTK Query` для мутаций и кэширования данных

## 🗺️ Маршрутизация

### React Router

- Вложенная маршрутизация
- Динамические параметры:
  - `restaurantId`
  - `dishId`
- Обработка 404 через `<Navigate>`

## 🧩 Провайдеры и контексты

- `ThemeProvider` - управление темой
- `UserProvider` - авторизация/сессия пользователя
- `ReduxProvider` - глобальное хранилище

## 🎨 Стилизация

- `normalize.css` для сброса стилей
- Кастомные CSS-переменные

## 🔍 Особенности реализации

### Nested Routes

```jsx
<Route path='/restaurants' element={<RestaurantsPage />}>
  <Route path=':restaurantId' element={<RestaurantPage />}>
    <Route path='menu' element={<MenuPage />} />
    <Route path='reviews' element={<ReviewsPage />} />
  </Route>
</Route>
```
