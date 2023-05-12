import axios from "axios";
import { parseCookies } from "nookies";

const { "taskmania:token": token } = parseCookies();

export const api = axios.create({
  baseURL: "http://localhost:3333/api",
  headers: {
    Authorization: "Bearer " + token,
  },
});
