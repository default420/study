import axios from 'axios'

const api = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  timeout: 2000
})

export default api
