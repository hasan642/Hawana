/**
 * instance.ts
 * developed by Hasan Alawneh.
 * A file that creates an axios instance
 * created at: 21/12/2021
 */

import axios from 'axios';

const axiosConfig = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 20000,
});

export default axiosConfig;
