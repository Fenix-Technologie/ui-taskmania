import axios from "axios";
import { loadingLocalStorage } from '../utils/loadingLocalStorage'

export const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    Authorization: loadingLocalStorage('@taskmania:token')
  }
});