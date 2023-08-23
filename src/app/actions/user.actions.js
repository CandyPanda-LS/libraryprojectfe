import { createAsyncThunk } from '@reduxjs/toolkit';
import { USERAPI } from '../api/user.api';

export const login = createAsyncThunk('user/login', async (userCredentials) => {
  const response = await USERAPI.login(userCredentials);
  return response.data;
});

export const register = createAsyncThunk('user/register', async (userDetails) => {
  const response = await USERAPI.register(userDetails);
  return response.data;
});

export const getUser = createAsyncThunk('user/getUser', async () => {
  const response = await USERAPI.getUser();
  return response.data;
});

export const getAdmin = createAsyncThunk('user/getUser', async () => {
  const response = await USERAPI.getAdmin();
  return response.data;
});
