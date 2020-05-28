import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://newsapi.org/v2/',
});

export default instance;
