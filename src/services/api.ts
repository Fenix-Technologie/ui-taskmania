import axios from "axios";

const token = JSON.parse(localStorage.getItem('@taskmania:token') || '')

export const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    Authorization: token
  }
});