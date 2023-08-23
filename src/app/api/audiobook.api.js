import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

const requestConfigJson = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
    'Content-type': 'application/json',
  },
};

export const AUDIOBOOKAPI = {
  fetchAllBooks: () => axios.get(`${BASE_URL}/api/book/audiobook/all`),
  saveAudioBook: (newBook) =>
    axios.post(`${BASE_URL}/api/book/audiobook`, newBook, requestConfigJson),
};
