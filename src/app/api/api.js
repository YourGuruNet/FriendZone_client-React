import axios from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';

axios.defaults.baseURL = 'http://localhost:5000/api';

// If getting on of errors show tost component with error message
axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    switch (status) {
      case 400:
        toast.error('Bad request');
        break;
      case 401:
        toast.error('Unauthorized');
        break;
      case 404:
        history.push('/not-found');
        break;
      case 500:
        toast.error('Server error');
        break;
    }
    return Promise.reject(error);
  }
);

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  del: (url) => axios.delete(url).then(responseBody),
};

export const ActivitiesApiCall = {
  list: () => requests.get('/activities'),
  details: (id) => requests.get(`/activities/${id}`),
  create: (activity) => requests.post('/activities', activity),
  update: (activity) => requests.put(`/activities/${activity.id}`, activity),
  delete: (id) => requests.del(`/activities/${id}`),
};
