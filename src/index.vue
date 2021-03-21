<template>
  <div v-if="goodsListAll.length" class="shop-car">
    <div v-if="this.$store.state.isOrderListPage">
      <div v-for="(item, index) of goodsListAll" :key ="index">
        <goods-list
        :list = "item"
        ></goods-list>
      </div>
    </div>
    <div v-if="!this.$store.state.isOrderListPage" class="order-list">
      <div v-if="orderList.length">
        <div v-for="(item, index) of orderList" :key ="index">
          <shop-car-list
          :list = "item"
          ></shop-car-list>
        </div>
        <div class="text-right text-middle">共计 {{totalPrice}}￥</div>
      </div>
      <div v-else>
        这里空空如也
      </div> 
    </div>
  </div>
</template>

<script>
import goodsList from './components/goodsList';
import shopCarList from './components/shopCarList';

export default {
  components: {goodsList, shopCarList},
  name: 'shoppingCard',
  computed: {
    totalPrice(){
      let price = 0;
      this.goodsListAll.forEach(item => {
        price += item.count * item.price;
      });
      return Math.round(price * 100)/100;
    },

    goodsListAll() {
      return this.$store.getters.getGoodsList;
    },

    orderList() {
      return this.$store.state.goodsList.filter(item => item.count > 0)
    }
  }
}
</script>

<style lang='scss'>
@import './assets/style/index.scss'; 
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
