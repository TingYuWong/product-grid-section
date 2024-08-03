import axios from 'axios';

const baseAxios = axios.create({
  baseURL: `http://localhost:6060`,
});

export default baseAxios;
