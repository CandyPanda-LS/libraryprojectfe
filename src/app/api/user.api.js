import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BOOKHUB_API;

const requestConfigJson = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
    'Content-type': 'application/json',
  },
};

export const USERAPI = {
  login: (userCredentials) => axios.post(`${BASE_URL}/api/auth/signin`, userCredentials),
  register: (userDetails) => axios.post(`${BASE_URL}/api/auth/guestuser/signup`, userDetails),
  getUser: () => axios.get(`${BASE_URL}/api/guestuser`, requestConfigJson),
  getAdmin: () => axios.get(`${BASE_URL}/api/admin`, requestConfigJson),
};
