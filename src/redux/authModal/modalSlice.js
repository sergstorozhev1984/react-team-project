import { createSlice } from '@reduxjs/toolkit';
import { fetchCalorie } from './modalThunk';

const initialState = {
  calorie: [],
  isLoading: false,
  error: null,
  dailyRate: null,
};

export const calorieSlice = createSlice({
  name: 'calorie',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCalorie.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCalorie.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.calorie = action.payload.notAllowedProducts;
        state.dailyRate = action.payload.dailyRate;
      })
      .addCase(fetchCalorie.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const calorieReducer = calorieSlice.reducer;
export default calorieSlice.reducer;
