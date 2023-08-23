import { createSlice } from '@reduxjs/toolkit';
import {
  fetchAllPhysicalBooks,
  donatePhysicalBook,
  requestPhysicalBook,
} from '../actions/physicalbook.action';
import { toast } from 'react-toastify';

const filterBooks = (bookList, searchWord) => {
  let newArray = bookList.filter(function (el) {
    return el.title.toLowerCase().includes(searchWord.toLowerCase());
  });
  return newArray;
};

const physicalBookSlice = createSlice({
  name: 'physicalbook',
  initialState: {
    books: [],
    filterBooks: [],
    status: 'success',
  },
  reducers: {
    pendingPhysicalBookStatus: (state) => {
      state.status = 'pending';
    },
    filteringPhysicalBooks: (state, action) => {
      state.filterBooks = filterBooks(state.books, action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllPhysicalBooks.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = action.payload;
      state.filterBooks = action.payload;
      state.status = 'success';
    });
    builder.addCase(donatePhysicalBook.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = [...state.books, action.payload];
      state.filterBooks = [...state.filterBooks, action.payload];
      state.status = 'success';
      toast.success('Donation Success');
    });
    builder.addCase(requestPhysicalBook.fulfilled, (state, action) => {
      // Add user to the state array
      state.books = state.books.map((x) => (x.id === action.payload.id ? action.payload : x));
      state.filterBooks = state.books.map((x) => (x.id === action.payload.id ? action.payload : x));
      state.status = 'success';
      toast.success('Request Success');
    });
  },
});

export const { filteringPhysicalBooks, pendingPhysicalBookStatus } = physicalBookSlice.actions;

export default physicalBookSlice.reducer;
