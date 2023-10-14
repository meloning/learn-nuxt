<template>
  <div class="list-wrapper">
    <ul>
      <li v-for="cartItem in $store.state.cartItems" :key="cartItem.id" class="list-item">
        <img class="thumbnail" :src="cartItem.imageUrl" :alt="cartItem.name">
        <div class="description">
          <p>{{ cartItem.name }}</p>
          <span>{{ cartItem.price }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store'

export default {
  // 일반 컴포넌트에서는 asyncData는 동작 x -> 페이지 컴포넌트에서만 asyncData를 쓸 수 있기 때문
  // async asyncData({store}) {
  //   await store.dispatch(FETCH_CART_ITEMS)
  // }
  async fetch() {
    // 이미 브라우저에서 컴포넌트가 생성되어 있었고 그 컴포넌트로 이동하기 때문에 this는 VueComponent를 가리킴
    // 바로 URL로 진입했을때와 다른 URL로 진입했다가 이쪽 URL로 올때 this가 가리키는 값들이 차이가 있다.
    // console.log(this)
    await this.$store.dispatch(FETCH_CART_ITEMS)
  }
}
</script>

<style scoped>
.list-wrapper {
  margin: 0.4rem 0;
}

.list-item {
  display: flex;
}

.thumbnail {
  width: 100px;
  height: 100px;
}

.description {
  padding: 2rem 1rem;
}
</style>
