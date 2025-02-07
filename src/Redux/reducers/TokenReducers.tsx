import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TokenState {
  value: string | null;
}


const initialState: TokenState = {
    value: localStorage.getItem('Token')
      ? JSON.parse(localStorage.getItem('Token')!).token
      : null,
  };
  

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      const existingData = localStorage.getItem('Token');
      let updatedData = {};
    
      if (existingData) {
        // Parse the existing data and merge with the new token
        updatedData = { ...JSON.parse(existingData), token: action.payload };
      } else {
        // If no existing data, create a new object with just the token
        updatedData = { token: action.payload };
      }
    
      // Save the updated data back to localStorage
      localStorage.setItem('Token', JSON.stringify(updatedData));
    },
    clearToken: (state) => {
      state.value = null;
      localStorage.removeItem('Token');

    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
