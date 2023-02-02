import axios from 'axios';

export const userPublicAPI = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

export const userPrivateAPI = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
});

export const token = {
  set: token => {
    userPrivateAPI.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset: () => {
    userPrivateAPI.defaults.headers.Authorization = '';
  },
};

export const getCalorie = async data => {
  const result = await userPublicAPI.post('daily-rate', data);
  return result.data;
};

export const getCalorieForUser = async (userId, data) => {
  const result = await userPrivateAPI.post(`daily-rate/${userId}`, data);
  return result.data;
};
