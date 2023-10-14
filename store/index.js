import { addRandomQueryToImageUrl } from "@/plugins/image-utils"

export const state = () => ({
  cartItems: [],
})

// constants
const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'
const ADD_CART_ITEMS = 'ADD_CART_ITEMS'
const SET_CART_ITENS = 'SET_CART_ITENS'

// state를 변경하는 유일한 동기 함수를 정의해둔 속성이자 영역
export const mutations = {
  [ADD_CART_ITEMS](state, cartItem) {
    const newCartItem = {
      ...cartItem, // spread operator
      imageUrl: addRandomQueryToImageUrl(cartItem.imageUrl)
    }
    state.cartItems.push(newCartItem)
  },
  [SET_CART_ITENS](state, cartItems) {
    state.cartItems = cartItems
  }
}

// mutation 속성(영역) 내에서 비동기 함수를 호출하는 곳
export const actions = {
  // ES6 +의 동적 키 값 정의 방식 활용
  // -> TS에서 타입 추론 관점에서 이점을 얻을 수 있음.
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await this.$axios.get(`http://localhost:3000/carts`)
    commit(SET_CART_ITENS, data.map(item => ({
      ...item, // spread operator
      imageUrl: addRandomQueryToImageUrl(item.imageUrl)
    })))
  },
  // 호출하지 않아도 된다.
  // 라이프사이클 훅과 같은 동작이기 때문에 호출 X
  // async nuxtServerInit(storeContext, nuxtContext) {
  //   await storeContext.dispatch(FETCH_CART_ITEMS)
  // }
}
