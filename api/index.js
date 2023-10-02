import $axios from '@nuxtjs/axios'

const instance = $axios.setBaseURL('http://localhost:3000')

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

export { fetchProductById }
