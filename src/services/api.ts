import axios from 'axios';

const apiUrl = 'http://192.168.18.2:3333';

const api = axios.create({
  baseURL: apiUrl,
});

export { api };
