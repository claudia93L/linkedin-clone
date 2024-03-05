import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    connections: 300,
    experiences: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setConnections: (state, action) => {
      state.connections = action.payload;
    },
    setExperiences: (state, action) => {
      state.experiences = action.payload;
    },
  },
});

export const { setUser, setConnections, setExperiences } = userSlice.actions;
export default userSlice.reducer;
