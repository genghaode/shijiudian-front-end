import axios from 'axios'
let url = 'http://m.shijiudian.com'
if (__PROD_DEV__) {
  url = 'http://localhost:3000'
}

export const fetchBanner = () => {
  return axios.get(`${url}/api/banner`)
}

export const fetchItem = (start, take, type, key) => {
  return axios.get(`${url}/api/item?start=${start}&take=${take}&type=${type}&key=${key}`)
}

export const fetchLogin = (obj) => {
  return axios.get(`${url}/api/login?mobile=${obj.mobile}&password=${obj.password}`)
}

export const fetchCategory = () => {
  return axios.get(`${url}/api/category`)
}

export const fetchItemView = (key) => {
  return axios.get(`${url}/api/itemView?key=${key}`)
}
export const fetchCollection = (key) => {
  return axios.put(`${url}/api/collection?key=${key}`)
}

export const fetchLogout = () => {
  return axios.get(`${url}/api/logout`)
}
