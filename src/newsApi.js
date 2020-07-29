import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/",
});

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    response.headers["Access-Control-Allow-Origin"] = "*";
    return response;
  },
  (error) => {
    console.log("Interceptors error");
    Promise.reject(error);
  }
);

export default instance;
