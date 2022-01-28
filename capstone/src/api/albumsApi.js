import axios from 'axios'

const albumsApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

export default albumsApi