import { createSlice, createSelector } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../materials/normalized-mock';

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {
    selectUserById: (state, id) => state.entities[id],
  },
});

const selectUsersState = (state) => state.users;

export const selectUserIds = createSelector([selectUsersState], (users) => users.ids);

export const { selectUserById } = usersSlice.selectors;
export default usersSlice.reducer;
