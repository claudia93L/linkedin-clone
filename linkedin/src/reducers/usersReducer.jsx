import { createSlice } from '@reduxjs/toolkit';

const usersSlices = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { setUsers } = usersSlices.actions;
export default usersSlices.reducer;
