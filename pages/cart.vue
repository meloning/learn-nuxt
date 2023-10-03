<template>
  <div class="container">
    <h1 class="list-title">카트 페이지</h1>
    <CartList />
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import CartList from '~/components/CartList.vue'
export default {
  components: { CartList },
  // 페이지 진입하기 전 asyncData를 통해 데이터를 dispatch(다 불러와)하여 데이터를 표현하겠다라는 뜻
  // async asyncData({ store }) {
  //   await store.dispatch('fetchCartItems')
  // }
  // => nuxtServerInit을 통해 store를 생성하는 시점에(페이지를 렌더하기 훨씬 이전 시점) 데이터를 모두 fetch할 수 있게 actions에서 제공해주는 함수
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}

.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}

.extra-panel {
  text-align: right;
  padding: 0.2rem 0;
}
</style>
