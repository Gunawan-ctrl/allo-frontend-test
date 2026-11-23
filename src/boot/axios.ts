import axios from 'axios'

const api = axios.create({
  baseURL: 'https://lldev.thespacedevs.com/2.2.0',
  timeout: 15000,
  headers: {
    Accept: 'application/json',
  },
})

export default api
