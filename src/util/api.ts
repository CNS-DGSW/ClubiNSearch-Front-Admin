import axios from "axios";

const API = axios.create({
  baseURL: "https://api.dgswcns.co.kr/",
});

export default API;
