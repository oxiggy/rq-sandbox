import axios from 'axios';

const API_URL = 'http://localhost:3004'

axios.defaults.baseURL = API_URL

export const PostsService = {
  async getAll() {
    return axios.get('/posts')
  },
  async getById(id) {
    return axios.get(`/posts/${id}`)
  }
}