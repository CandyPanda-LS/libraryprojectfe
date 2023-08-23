import { createAsyncThunk } from '@reduxjs/toolkit';
import { AUDIOBOOKAPI } from '../api/audiobook.api';

export const fetchAllBooks = createAsyncThunk('audiobook/fetchAllBooks', async () => {
  const response = await AUDIOBOOKAPI.fetchAllBooks();
  return response.data;
});

export const saveAudioBook = createAsyncThunk('digitalbook/saveAudioBook', async (newAudioBook) => {
  const response = await AUDIOBOOKAPI.saveAudioBook(newAudioBook);
  return response.data;
});
