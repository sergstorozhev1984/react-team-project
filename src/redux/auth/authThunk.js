import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from 'htpp/htpp';
import {
  login,
  logOut,
  registration,
  userGetInfo,
  userRefresh,
} from 'services/authUserApi';

export const registerThunk = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    const { email, password } = formData;
    try {
      await registration(formData);
      const data = await login({ email, password });
      token.set(data.accessToken);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const data = await login(formData);
      token.set(data.accessToken);

      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      await logOut();

      token.unset();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// export const userRefreshThunk = createAsyncThunk(
//   'user/curentUserThunk',
//   async (_, thunkAPI) => {
//     try {
//       const response = await userRefresh();

//       return response;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
export const userRefreshThunk = createAsyncThunk(
  'user/curentUserThunk',
  async (oldSid, thunkAPI) => {
    const state = thunkAPI.getState();

    const refreshToken = state.auth.refreshToken;

    token.set(refreshToken);

    try {
      const { newAccessToken, newRefreshToken, sid } = await userRefresh({
        sid: oldSid,
      });
      token.set(newAccessToken);

      const data = await userGetInfo();

      return {
        user: data,
        sid,
        refreshToken: newRefreshToken,
        accessToken: newAccessToken,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
