<template>
    <div>
      <p>메인 페이지입니다.</p>
      <ProductList />
    </div>
</template>

<script>
import ProductList from '~/components/ProductList.vue'

export default {
  components: { ProductList },
  // pages 에서만 활용되는 asyncData 함수
  // 페이지가 그려지기 전에 호출되는 함수이기 때문에 컴포넌트 자체를 가리키는 This는 사용할 수 없음.
  // async asyncData({ $axios }) {
  //   const response = await $axios.get('http://localhost:3000/products')
  //   const products = response.data
  //   return { products }
  // },
}
</script>

<style>

</style>
