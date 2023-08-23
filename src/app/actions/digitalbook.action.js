import { createAsyncThunk } from '@reduxjs/toolkit';
import { DIGITALBOOKAPI } from '../api/digitalbook.api';

export const fetchAllBooks = createAsyncThunk('digitalbook/fetchAllBooks', async () => {
  const response = await DIGITALBOOKAPI.fetchAllBooks();
  return response.data;
});

export const saveDigitalBook = createAsyncThunk(
  'digitalbook/saveDigitalbook',
  async (newDigitalBook) => {
    const response = await DIGITALBOOKAPI.saveDigitalBooks(newDigitalBook);
    return response.data;
  },
);

export const deleteDigitalBook = createAsyncThunk(
  'digitalbook/deleteDigitalBook',
  async (bookId) => {
    const response = await DIGITALBOOKAPI.deleteDigitalBook(bookId);
    return response.data;
  },
);
