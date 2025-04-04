import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { getUsers } from './getUsers';

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: 'users',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  selectors: {
    selectUserById: (state, id) => state.entities[id],
    selectUsersEntities: (state) => state.entities,
    selectUsersIds: (state) => state.ids,
  },
  extraReducers: (builder) =>
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.upsertMany(state, payload);
    }),
});

export const { selectUserById, selectUsersEntities, selectUsersIds } = usersSlice.selectors;
export default usersSlice.reducer;
