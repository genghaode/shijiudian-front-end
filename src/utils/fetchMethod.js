import axios from 'axios'
let url = 'http://m.shijiudian.com'
if (__PROD_DEV__) {
  url = 'http://localhost:3000'
}

export const fetchBanner = () => {
  return axios.get(`${url}/api/getBanner`)
}

export const fetchItemList = (pageNum) => {
  return axios.get(`${url}/api/getItemList?pageNum=${pageNum}`)
}

export const fetchLogin = (obj) => {
  return axios.post(`${url}/api/postLogin`, { 'name': obj.name, 'pwd': obj.pwd })
}

export const fetchCategory = () => {
  return axios.get(`${url}/api/getCategoryData`)
}
