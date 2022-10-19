import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_X_RAPIDAPI_HOST,
  },
});

export default apiClient;
