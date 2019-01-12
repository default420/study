import axios from 'axios'

const api = axios.create({
  baseUrl: process.env.VUE_APP_API_HOST,
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 2000
})

export default api
