import { createAsyncThunk } from '@reduxjs/toolkit';

import { getCalorie, getCalorieForUser, token } from '../../services/modalApi';

export const fetchCalorie = createAsyncThunk(
  'calorie/fetchAll',
  async (formData, thunkAPI) => {
    try {
      const result = await getCalorie(formData);
 
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCalorieForUser = createAsyncThunk(
  'calorie/fetchAll',
  async ({formData, userId}, thunkAPI) => {
    const accessToken = thunkAPI.getState().auth.token;
    try {
      token.set(accessToken)
      const result = await getCalorieForUser(userId, formData);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
