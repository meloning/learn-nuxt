<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img class="product-image" :src="product.imageUrl" :alt="product.name" />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">카트에 담기</button>
      </div>
    </div>
  </div>
</template>

<script>
// import { fetchProductById } from '@/api/index'
import { ADD_CART_ITEMS } from '@/store'

export default {
  async asyncData({ $axios, params }) {
    const response = await $axios.get(`${process.env.baseURL}/products/${params.id}`)
    const product = response.data
    return { product }
  },
  head() {
    return {
      title: `${this.product.name}`, // ` : 템플릿 리터럴 값 (백틱)
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `이 상품은 ${this.product.name}입니다.`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.product.name}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `이 상품은 ${this.product.name}입니다.`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${this.product.imageUrl}`
        },
      ],
    }
  },
  methods: {
    async addToCart() {
      const response = await this.$axios.post(`${process.env.baseURL}/carts`, this.product)
      console.log(response)
      this.$store.commit(ADD_CART_ITEMS, this.product)
      this.$router.push('/cart')
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.product-image {
  width: 500px;
  height: 375px;
}

.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
