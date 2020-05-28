import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://newsapi.org/v2',
});

instance.interceptors.response.use(
  (response) => {
    response.headers['Access-Control-Allow-Origin'] = '*';
    return response;
  },
  (error) => Promise.reject(error)
);

export default instance;
