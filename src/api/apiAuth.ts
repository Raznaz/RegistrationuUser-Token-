import axios from 'axios';
import { User } from '../interfaces/interfaces';

const authApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const registrationUser = async (user: any) => {
  const { data } = await authApi.post('/auth/registration', {
    email: user.email,
    password: user.password,
  });
  return data;
};

export const addNewUser = async (user: any) => {
  const { data } = await authApi.post('/users', {
    email: user.email,
    password: user.password,
  });
  return data;
};
