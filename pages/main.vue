<template>
    <div>
      <p>메인 페이지입니다.</p>
    </div>
</template>

<script>
export default {
    async created() {
      const response = await this.$axios.get('http://localhost:3000/products')
      console.log(response)
    }
}
</script>

<style>

</style>
