import { createSlice } from '@reduxjs/toolkit';
import { getUser, login, register } from '../actions/user.actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    loginStatus: false,
  },
  reducers: {
    logout: (state) => {
      window.location.href = '/login';
      localStorage.removeItem('Authorization');
      localStorage.removeItem('Role');
      state.user = null;
      state.loginStatus = false;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(login.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload;
      state.loginStatus = true;
      localStorage.setItem('Role', action.payload.roles[0]);
      localStorage.setItem('Authorization', action.payload.accessToken);
      window.location.href = '/';
    });
    builder.addCase(register.fulfilled, (state, action) => {
      // Add user to the state array
      localStorage.removeItem('Authorization');
      localStorage.removeItem('Role');
      window.location.href = '/login';
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.user = action.payload;
      state.loginStatus = true;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
