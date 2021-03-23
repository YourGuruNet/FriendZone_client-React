import axios from 'axios';
import { toast } from 'react-toastify';
import { history } from '../..';

axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('login');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// If getting on of errors show tost component with error message
axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    switch (status) {
      case 400:
        if (typeof data == 'string') {
          toast.error(data);
        }
        if (data.errors) {
          const modalStateErrors = [];
          for (const key in data.errors) {
            if (data.errors[key]) {
              modalStateErrors.push(data.errors[key]);
            }
          }
          throw modalStateErrors.flat();
        }
        break;
      case 401:
        toast.error('Unauthorized');
        break;
      case 404:
        history.push('/not-found');
        break;
      case 500:
        toast.error(data.message);
        break;
      default:
        return;
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

//Login, Register
export const Account = {
  current: () => requests.get('/account'),
  login: (user) => requests.post('/account/login', user),
  register: (user) => requests.post('/account/register', user),
};
