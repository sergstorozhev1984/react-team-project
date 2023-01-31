import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCalorie } from '../../services/modalApi';

export const fetchCalorie = createAsyncThunk(
  'calorie/fetchAll',
  async (data, thunkAPI) => {
    try {
      const result = await getCalorie(data);
      console.log(result);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
