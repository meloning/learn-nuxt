<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
import { fetchAllProducts } from '@/api'

export default {
  // asyncData는 pages에서만 사용할 수 있는 함수이기 때문에 axios가 동작하지 않음.
  async asyncData({ $axios }) {
    const response = await fetchAllProducts()
    const products = response.data
    return { products }
  },
}
</script>

<style>

</style>
