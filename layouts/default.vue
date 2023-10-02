<template>
  <div>
    <header>
      <h1>Nuxt Shopping</h1>
    </header>
    <Nuxt />
  </div>
</template>

<script>
export default {
    created() {
        console.log(this.$route)
    }
}
</script>

<style>

</style>
