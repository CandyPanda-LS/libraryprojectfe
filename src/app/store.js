import { configureStore } from '@reduxjs/toolkit';
import paperReducer from './slices/paper.slice';
import digitalBookReducer from './slices/digitalbook.slice';
import physicalBookReducer from './slices/physicalbook.slice';
import audioBookReducer from './slices/audiobook.slice';
import userReducer from './slices/user.slice';
import contactusReducer from './slices/contactus.slice';

export const store = configureStore({
  reducer: {
    audiobook: audioBookReducer,
    digitalbook: digitalBookReducer,
    physicalbook: physicalBookReducer,
    paper: paperReducer,
    user: userReducer,
    contactus: contactusReducer,
  },
});
