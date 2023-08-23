import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

const requestConfigJson = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
    'Content-type': 'application/json',
  },
};

export const PAPERAPI = {
  fetchAllPapers: () => axios.get(`${BASE_URL}/api/paper/all`),
  savePaper: (newPaper) => axios.post(`${BASE_URL}/api/paper/`, newPaper, requestConfigJson),
};
