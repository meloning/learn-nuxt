import { addRandomQueryToImageUrl } from "@/plugins/image-utils"

export const state = () => ({
  cartItems: [],
})

// state를 변경하는 유일한 동기 함수를 정의해둔 속성이자 영역
export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem, // spread operator
      imageUrl: addRandomQueryToImageUrl(cartItem.imageUrl)
    }
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  }
}

// mutation 속성(영역) 내에서 비동기 함수를 호출하는 곳
export const actions = {
  async fetchCartItems({ commit }) {
    const { data } = await this.$axios.get(`http://localhost:3000/carts`)
    commit('setCartItems', data.map(item => ({
      ...item, // spread operator
      imageUrl: addRandomQueryToImageUrl(item.imageUrl)
    })))
  },
  // 호출하지 않아도 된다.
  // 라이프사이클 훅과 같은 동작이기 때문에 호출 X
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch('fetchCartItems')
  // }
}
