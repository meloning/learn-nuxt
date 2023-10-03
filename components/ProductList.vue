<template>
  <div>
    {{ products }}
  </div>
</template>

<script>
export default {
  // asyncData는 pages에서만 사용할 수 있는 함수이기 때문에 axios가 동작하지 않음.
  async asyncData({ $axios }) {
    const response = await $axios.get(`${process.env.baseURL}/products`)
    const products = response.data
    return { products }
  },
}
</script>

<style>

</style>
