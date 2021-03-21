<template>
  <div v-if="goodsListAll.length" class="shop-car">
    <div v-if="this.$store.state.isOrderListPage">
      <div v-for="(item, index) of goodsListAll" :key ="index">
        <goods-list
        :list = "item"
        ></goods-list>
      </div>
      <div>已选择商品{{this.$store.state.totalcount}}个</div>
    </div>
    <div v-if="!this.$store.state.isOrderListPage" class="order-list">
      <div v-for="(item, index) of orderList" :key ="index">
        <shop-car-list
        :list = "item"
        ></shop-car-list>
      </div>        
    </div>
  </div>
</template>

<script>
import goodsList from './goodsList';
import shopCarList from './shopCarList';

export default {
  components: {goodsList, shopCarList},
  name: 'App',
  data() {
    return {
        goods: this.$store.state.goods
    }
  },
  computed: {
    goodsListAll() {
      console.log( this.$store.state.goods,' this.$store.state.goods');
      return this.$store.state.goods;
    },
    orderList() {
      return this.$store.state.goods.filter(item => item.count > 0)
    }
  }
}
</script>

<style lang='scss' scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .shop-car {
    color: red;
    margin-bottom: 30px;
  }
}
</style>
