<template>
  <div>
    <h1>상세 페이지</h1>
    <div>
      <img :src="product.imageUrl" :alt="product.name" />
      <p>name: {{ product.name }}</p>
      <p>price: {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
// import { fetchProductById } from '@/api/index'

export default {
  async asyncData({ $axios, params }) {
    const response = await $axios.get(`http://localhost:3000/products/${params.id}`)
    const product = response.data
    return { product }
  }
}
</script>

<style>

</style>
