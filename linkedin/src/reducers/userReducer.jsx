import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [],
    connections: 300,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setConnections: (state, action) => {
      state.connections = action.payload;
    },
  },
});

export const { setUser, setConnections } = userSlice.actions;
export default userSlice.reducer;
