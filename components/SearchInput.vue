<template>
  <div>
    <!-- 컴포넌트 인터렉션 수단은 emit의 'input' key를 통해 호출하는 상위 컴포넌트인 index.vue의 @input 속성을 통해 값을 넘겨준다. -->
    <input type="text" :value="searchKeyword" @input="$emit('input', $event.target.value)"/>
    <button type="buttom" @click="$emit('search')">search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyword: {
      type: String,
      default: () => '',
    },
  },
}
</script>

<style>

</style>
