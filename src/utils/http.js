import axios from "axios";
import Cookies from "universal-cookie/es6";

const cookies = new Cookies();

const http = axios.create({
  baseURL: "http://exampleurl.com/api",
  headers: {
    "Content-Type": "application/json",
    "auth-token": cookies.get("token"),
  },
});

export default http;
