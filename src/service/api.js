import axios from "axios";

const controller = new AbortController();

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  signal: controller.signal,
});

export default api;
