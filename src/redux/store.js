import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/authSlice';
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

const persistConfig = {
  key: 'auth-user',
  storage,
};
export const persistedAuthUserReducer = persistReducer(
  persistConfig,
  authReducer
);

export const store = configureStore({
  reducer: {
    auth: persistedAuthUserReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
