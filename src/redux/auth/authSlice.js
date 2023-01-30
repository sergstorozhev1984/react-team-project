import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logOutThunk,
  registerThunk,
  userRefreshThunk,
} from './authThunk';

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
  refreshToken: '',
  sid: '',
  isLoggedIn: false,
};

const hadleUserLogin = (
  state,
  { payload: { sid, refreshToken, user, accessToken } }
) => {
  state.user = user;
  state.token = accessToken;
  state.isLoggedIn = true;
  state.sid = sid;
  state.refreshToken = refreshToken;
};

const userSlice = createSlice({
  name: 'authUser',
  initialState,
  extraReducers: builder =>
    builder
      ///////////////Register////////////////////////////////
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   ///////////////Login////////////////////////////////
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, hadleUserLogin)
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   ///////////////////////logOut////////////////////////////////////////////////
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      //   /////////////////////////userRefres///////////////////////////////////////
      .addCase(userRefreshThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      // .addCase(userRefreshThunk.fulfilled, (state, { payload }) => {
      //   state.isLoading = false;
      //   // state.user = payload.user;
      //   state.isLoggedIn = true;
      //   state.refreshToken = payload.newRefreshToken;
      //   state.sid = payload.sid;
      // })
      .addCase(userRefreshThunk.fulfilled, hadleUserLogin)
      .addCase(userRefreshThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = userSlice.reducer;
