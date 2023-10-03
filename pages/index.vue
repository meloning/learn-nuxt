<template>
  <div class="app">
    <main>
      <div>
        <!-- <SearchInput :search-keyword="searchKeyword" @input="updateSearchKeyword"/> -->
        <SearchInput v-model="searchKeyword" @search="searchProducts" />
      </div>
      <ul>
        <li v-for="product in products" :key="product.id" class="item flex" @click="moveToDetailPage(product.id)">
          <img :src="product.imageUrl" :alt="product.name" class="product-image" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}</span>
        </li>
      </ul>
      <div class="cart-wrapper">
        <button class="btn" @click="moveToCartPage">장바구니 바로가기</button>
      </div>
    </main>
  </div>
</template>

<script>
// Webpack 설정 내부적으로 특정 파일을 쫓아갈때 resolve 옵션 => 얼라이어스 별칭 옵션
import SearchInput from '~/components/SearchInput.vue'
export default {
  components: { SearchInput },
  // pages 에서만 활용되는 asyncData 함수
  // 페이지가 그려지기 전에 호출되는 함수이기 때문에 컴포넌트 자체를 가리키는 This는 사용할 수 없음.
  async asyncData({ $axios }) {
    const response = await $axios.get(`${process.env.baseURL}/products`)
    const products = response.data.map(item => {
      return {
        ...item, // spread operator
        imageUrl: `${item.imageUrl}?random=${Math.random()}` // 동일한 주소에서 동일한 이미지를 가져오고 있기 때문에 캐싱될 확률이 있기에
      }
    })
    return { products } // return 값이 data 속성으로 내부적으로 추가된다.
  },

  data() {
    return {
      searchKeyword: '',
    }
  },

  methods: {
    moveToDetailPage(id) {
      // console.log(id)
      this.$router.push(`detail/${id}`) // dynamic routing -> _id.vue (_id == parameter)
    },
    updateSearchKeyword(keyword) {
      this.searchKeyword = keyword
    },
    async searchProducts() {
      const response = await this.$axios.get(`${process.env.baseURL}/products`, {
        params: {
          name_like: this.searchKeyword
        }
      })
      // console.log(response)
      this.products = response.data.map(item => {
        return {
          ...item, // spread operator
          imageUrl: `${item.imageUrl}?random=${Math.random()}` // 동일한 주소에서 동일한 이미지를 가져오고 있기 때문에 캐싱될 확률이 있기에
        }
      })
    },
    moveToCartPage() {
      this.$router.push(`/cart`)
    }
  }
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
