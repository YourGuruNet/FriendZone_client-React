import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api';

const responseBody = (AxiosResponse) => AxiosResponse.data;

const request = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.del(url).then(responseBody),
};

export const ActivitiesApiCall = {
  list: () => request.get('/activities'),
  details: (id) => request.get(`/activities/${id}`),
  create: (activity) => request.post('/activities', activity),
  update: (activity) => request.put(`/activities/${activity.id}`, activity),
  delete: (id) => request.del(`/activities/${id}`),
};
