/**
 * instance.ts
 * developed by Hasan Alawneh.
 * A file that creates an axios instance
 * created at: 21/12/2021
 */

import axios from 'axios';
import { API_BASE_URL } from '@env';
console.log('API_BASE_URL', API_BASE_URL);
const axiosConfig = axios.create({
  baseURL: API_BASE_URL,
  timeout: 20000,
});

export default axiosConfig;
