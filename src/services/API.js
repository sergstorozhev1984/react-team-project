import axios from 'axios';
import { userPrivateAPI } from 'htpp/htpp';
axios.defaults.baseURL = 'https://slimmom-backend.goit.global';
const currentUser = async () => {
  const { data } = await axios.get('/user');
  return data;
};

const getInfoForDay = async date => {
  return await userPrivateAPI.post('/day/info', date);
};

const searchProducts = async search => {
  return await userPrivateAPI.get(`/product/?search=${search}`);
};
const addEatenProduct = async params => {
  return await userPrivateAPI.post('/day', params);
};

const deleteEatenProduct = async deleteData => {
  return await userPrivateAPI.delete('/day', { data: deleteData });
};

const API = {
  currentUser,
  getInfoForDay,
  searchProducts,
  addEatenProduct,
  deleteEatenProduct,
};
export default API;
