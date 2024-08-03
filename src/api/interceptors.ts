import { AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';

import baseAxios from '@/api/axios';

baseAxios.interceptors.response.use(
  function (response) {
    response.data = camelcaseKeys(response.data, { deep: true });
    return response;
  },
  function (error: { response: AxiosResponse }) {
    return Promise.reject(error);
  },
);
