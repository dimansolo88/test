import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3005',
  headers: {},
})

export const api = {
  async getProducts () {
    try {
      const res = await instance.get('/products')
      return res
    } catch (e) {
      // console.log(e)
    }
  },

  async getCurrentProduct (id) {
    try {
      const res = await instance.get(`/products/${id}`)
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  },

}
