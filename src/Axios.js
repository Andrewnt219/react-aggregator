import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-aggregator.firebaseio.com',
});

instance.interceptors.response.use(
  (response) => {
    response.headers['Access-Control-Allow-Origin'] = '*';
    return response;
  },
  (error) => Promise.reject(error)
);

export default instance;
