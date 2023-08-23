import { createSlice } from '@reduxjs/toolkit';
import { sendMessage } from '../actions/contactus.action';
import { toast } from 'react-toastify';

const contactUsSlice = createSlice({
  name: 'contactus',
  initialState: {
    status: 'success',
  },
  reducers: {
    pendingEmailStatus: (state) => {
      state.status = 'pending';
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.status = 'success';
      toast.success('Email Sent');
    });
  },
});

export const { pendingEmailStatus } = contactUsSlice.actions;

export default contactUsSlice.reducer;
