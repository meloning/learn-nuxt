import $axios from '@nuxtjs/axios'

const instance = $axios.setBaseURL(process.env.baseURL)

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

// carts
function fetchCartItems() {
  return instance.get(`/carts`)
}

function createCartItem(cartItem) {
  return instance.post(`/carts`, cartItem)
}

export { fetchProductById, fetchProductsByKeyword, createCartItem, fetchCartItems }
