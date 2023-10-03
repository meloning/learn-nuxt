import $axios from '@nuxtjs/axios'

const instance = $axios.setBaseURL('http://localhost:3000')

function fetchProductById(id) {
  return instance.get(`/products/${id}`)
}

function fetchProductsByKeyword(keyword) {
  return instance.get(`/products`, {
    params: {
      name_like: keyword
    }
  })
}

function createCartItem(cartItem) {
  return instance.post(`/carts`, cartItem)
}

export { fetchProductById, fetchProductsByKeyword, createCartItem }
