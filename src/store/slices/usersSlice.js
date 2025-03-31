import { createSlice } from '@reduxjs/toolkit';
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
    selectUsersEntities: (state) => state.entities,
  },
});

export const { selectUserById } = usersSlice.selectors;
export default usersSlice.reducer;
