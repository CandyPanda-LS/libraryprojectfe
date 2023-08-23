import { createSlice } from '@reduxjs/toolkit';
import { fetchAllPapers, savePaper } from '../actions/paper.action';
import { toast } from 'react-toastify';

const filterPapers = (paperList, searchWord) => {
  let newArray = paperList.filter(function (el) {
    return el.subject.toLowerCase().includes(searchWord.toLowerCase());
  });
  return newArray;
};

const paperSlice = createSlice({
  name: 'paper',
  initialState: {
    papers: [],
    status: 'success',
    filterPapers: [],
  },
  reducers: {
    pendingPaperStatus: (state) => {
      state.status = 'pending';
    },
    filteringPapers: (state, action) => {
      state.filterPapers = filterPapers(state.papers, action.payload);
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchAllPapers.fulfilled, (state, action) => {
      // Add user to the state array
      state.filterPapers = action.payload;
      state.papers = action.payload;
      state.status = 'success';
    });
    builder.addCase(savePaper.fulfilled, (state, action) => {
      // Add user to the state array
      state.filterPapers = [...state.papers, action.payload];
      state.papers = [state.papers, action.payload];
      state.status = 'success';
      toast.success('Saved successfully');
    });
  },
});

export const { filteringPapers, pendingPaperStatus } = paperSlice.actions;

export default paperSlice.reducer;
