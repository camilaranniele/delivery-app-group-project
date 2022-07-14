import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

export const requestLogin = async (url, body) => {
  try {
    const { data } = await api.post(url, body);
    return data;
  } catch {
    return null;
  }
};

export const requestRegister = async (url, body) => {
  try {
    const response = await api.post(url, body);
    return response;
  } catch (error) {
    return error.response;
  }
};

export const requestAdminRegister = async (url, body, token) => {
  try {
    const response = await api.post(url, body, {
      headers: {
        Authorization: `${token}`,
      },
    });
    return response;
  } catch (error) {
    return error.response;
  }
};

export const requestProdutos = async (url) => {
  const { data } = await api.get(url);
  return data;
};
