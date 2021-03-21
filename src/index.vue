<template>
  <div v-if="goodsListAll.length" class="shop-car">
    <div v-if="this.$store.state.isOrderListPage">
      <div v-for="(item, index) of goodsListAll" :key ="index">
        <goods-list
        :list ="item"
        @open-popup="openPopup"
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
      <popup
        :showPopup ="showPopup"
        @close-popup ="showPopup = false"
        >
        <div class="text-center middle-font popup-title">确定从购物车删除吗</div>
        <div class="fix-center popup-buton-group" >
          <div class="confirm-btn small-font " @click="confirm">确定</div>
          <div class="concel-btn small-font" @click="concel">取消</div>
        </div>
      </popup>
  </div>
</template>

<script>

let currentId;
import goodsList from './components/goodsList';
import shopCarList from './components/shopCarList';
import popup from './common/components/popup';
export default {
  components: {goodsList, shopCarList, popup},
  name: 'shoppingCard',
  data() {
    return {
      showPopup: false
    }
  },
  computed: {
    totalPrice(){
      let price = 0;
      this.goodsListAll.forEach(item => {
        price += item.count * item.price;
      });
      return (Math.round(price * 100)/100).toLocaleString();
    },

    goodsListAll() {
      return this.$store.getters.getGoodsList;
    },

    orderList() {
      return this.$store.state.goodsList.filter(item => item.count > 0)
    }
  },
  
  methods: {
    openPopup(id) {
      currentId = id;
      this.showPopup = true
    },
    confirm() {
      this.showPopup = false;
      //待优化 多次使用需提取出来
     const currentGoods = this.$store.getters.getGoodsList.find(item => item.id == currentId);
      currentGoods.count = 0;
    },
    concel() {
      this.showPopup = false;
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
    .popup-title {
      color: #000;
    }
    .popup-buton-group {
      margin-top: 20px;
      > div {
        flex: 1;
        text-align: center;
        &:nth-last-child(1) {
          color: green;
        }
      }
    }
  }
}
</style>
