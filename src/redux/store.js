import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
import { calorieReducer } from './authModal/modalSlice';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';
import { infoReducer } from './info/info-slice';

const persistConfig = {
  key: 'auth-user',
  storage,
  whitelist: ['sid', 'refreshToken', 'token'],
};
export const persistedAuthUserReducer = persistReducer(
  persistConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthUserReducer,
    infoUser: infoReducer,
    calorie: calorieReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
