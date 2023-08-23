import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

const requestConfigJson = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
    'Content-type': 'application/json',
  },
};

export const PHYSICALBOOKAPI = {
  fetchAllPhysicalBooks: () => axios.get(`${BASE_URL}/api/book/physicalbook/all`),
  donatePhysicalBook: (newBook) =>
    axios.post(`${BASE_URL}/api/book/donatebook`, newBook, requestConfigJson),
  requestPhysicalBook: (bookId) =>
    axios.post(
      `${BASE_URL}/api/book/physicalbook/borrowrequest/${bookId}`,
      null,
      requestConfigJson,
    ),
  approvePhysicalBookRequest: (bookId) =>
    axios.post(`${BASE_URL}/api/book/physicalbook/approve/${bookId}`),
  //   deletePost: (postId) =>
  //     axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`),
};
