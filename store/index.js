export const state = () => ({
  cartItems: [],
})

// state를 변경하는 유일한 동기 함수를 정의해둔 속성이자 영역
export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem, // spread operator
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}` // 동일한 주소에서 동일한 이미지를 가져오고 있기 때문에 캐싱될 확률이 있기에
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
      imageUrl: `${item.imageUrl}?random=${Math.random()}` // 동일한 주소에서 동일한 이미지를 가져오고 있기 때문에 캐싱될 확률이 있기에
    })))
  },
  // 호출하지 않아도 된다.
  // 라이프사이클 훅과 같은 동작이기 때문에 호출 X
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch('fetchCartItems')
  }
}
