import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

export const requestLogin = async (url, body) => {
  const { data } = await api.post(url, body);
  return data;
};

export const requestRegistro = async (url, body) => {
  const { data } = await api.post(url, body);
  return data;
};

export const requestProdutos = async (url) => {
  const { data } = await api.get(url);
  return data;
};
