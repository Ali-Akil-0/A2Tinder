import axios from "axios";

const instance = axios.create({
  baseURL: "https://a2tinder.herokuapp.com/",
});
export default instance;
