import { userPrivateAPI, userPublicAPI } from 'htpp/htpp';

export const registration = async formData => {
  const { data } = await userPublicAPI.post('auth/register', formData);
  return data;
};

export const login = async formData => {
  const { data } = await userPublicAPI.post('auth/login', formData);
  return data;
};

export const logOut = async () => {
  return await userPrivateAPI.post('auth/logout');
};

export const userRefresh = async sid => {
  const { data } = await userPrivateAPI.post('auth/refresh', sid);
  return data;
};
export const userGetInfo = async () => {
  const { data } = await userPrivateAPI.get('/user');
  return data;
};
