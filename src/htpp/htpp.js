import axios from 'axios';

export const userPublicAPI = axios.create({
  baseURL: 'https://slimmom-backend.goit.global/',
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
