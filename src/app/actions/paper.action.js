import { createAsyncThunk } from '@reduxjs/toolkit';
import { PAPERAPI } from '../api/paper.api';

export const fetchAllPapers = createAsyncThunk('paper/fetchAllPapers', async () => {
  const response = await PAPERAPI.fetchAllPapers();
  return response.data;
});

export const savePaper = createAsyncThunk('paper/savePaper', async (newPaper) => {
  const response = await PAPERAPI.savePaper(newPaper);
  return response.data;
});
