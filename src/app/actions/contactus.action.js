import { createAsyncThunk } from '@reduxjs/toolkit';
import { CONTACTUSAPI } from '../api/contactus.api';

export const sendMessage = createAsyncThunk('contactus/sendMessage', async (newMessage) => {
  const response = await CONTACTUSAPI.sendMessage(newMessage);
  return response.data;
});
