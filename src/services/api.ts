import axios from "axios";

const token = localStorage.getItem('@taskmania:token') || ''

let authToken = localStorage.getItem('@taskmania:token')
? JSON.parse(localStorage.getItem("@taskmania:token") || '')
: null

export const api = axios.create({
  baseURL: 'http://localhost:3333/api',
  headers: {
    'Authorization': 'Bearer ' + authToken
  }
});

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem('@taskmania:token')
//   ? JSON.parse(localStorage.getItem("@taskmania:token") || '')
//   : null

//   console.log(token)

//   if(token != ''){
//     api.defaults.headers.authorization = 'Bearer ' + token
//   }

//   return config
// })