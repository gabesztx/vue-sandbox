import http from 'axios';

export const getUsers = () => {
  return http.get('https://jsonplaceholder.typicode.com/users');
};

// const BASE_URL = 'https://jsonplaceholder.typicode.com';
/*
const opt = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
});
*/
