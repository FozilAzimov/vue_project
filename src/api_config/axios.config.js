import axios from "axios";

const api = "http://192.168.1.58:8080/";
const token = localStorage.getItem('access_token');

const http = axios.create({
  baseURL: api,
  headers:{
    Authorization: `Bearer ${token}`,
  },
});

export default http;