<template>
  <div class="app">
    <main>
      <div>
        <input type="text" />
      </div>
      <ul>
        <li class="item flex" v-for="product in products" :key="product.id">
          <img class="product-image" :src="product.imageUrl" :alt="product.name" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  // pages 에서만 활용되는 asyncData 함수
  // 페이지가 그려지기 전에 호출되는 함수이기 때문에 컴포넌트 자체를 가리키는 This는 사용할 수 없음.
  async asyncData({ $axios }) {
    const response = await $axios.get('http://localhost:3000/products')
    const products = response.data.map(item => {
      return {
        ...item, // spread operator
        imageUrl: `${item.imageUrl}?random=${Math.random()}` // 동일한 주소에서 동일한 이미지를 가져오고 있기 때문에 캐싱될 확률이 있기에
      }
    })
    return { products }
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>
