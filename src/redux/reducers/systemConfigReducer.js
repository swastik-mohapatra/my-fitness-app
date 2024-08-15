import { createSlice } from '@reduxjs/toolkit';

export const systemConfigReducer = createSlice({
  name: 'systemConfigReducer',
  initialState: {
    darkMode: false,
  },
  reducers: {
    setAccessData: (state, action) => {
      state[action.payload.type] = action.payload.response;
    },
    toggleDarkMode: (state) => {
        state.darkMode = !state.darkMode; // Toggle darkMode state
    }
  },
});
export const { setAccessData, toggleDarkMode } = systemConfigReducer.actions;

export default systemConfigReducer.reducer;
