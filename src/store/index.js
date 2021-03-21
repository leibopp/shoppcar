import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    goodsList: [
      {
        id: 1,
        price: 5000,
        name: '手机',
        maxNum: 50, //部分功能尚未完成
        count: 0,
        url:'http://img10.360buyimg.com/n1/s450x450_jfs/t1/142493/4/8103/59959/5f58a92dE350034f4/f4437a444b6ba41f.jpg'
      },          
      {
        id: 2,
        price: 10000,
        name: '电脑',
        maxNum: 501,
        count: 0,
        url:'http://img14.360buyimg.com/n1/s450x450_jfs/t1/131820/40/20171/80621/5fd88237E17d7d0d6/cb088e53ef7f2821.jpg'
      },
      {
        id: 3,
        price: 120,
        name: '耳机',
        maxNum: 503,
        count: 0,
        url:'http://img11.360buyimg.com/n1/s450x450_jfs/t1/170867/3/13556/50769/60544170Ecd4b7303/b7dfa5629e1e30e4.jpg'
      },
      {
        id: 4,
        price: 200,
        name: '鼠标',
        maxNum: 503,
        count: 0,
        url:'http://img13.360buyimg.com/n1/s450x450_jfs/t1255/234/275270370/59740/86ca0010/5510c5f6N47b6908f.jpg'
      },
      {
        id: 5,
        price: 1000,
        name: '键盘',
        maxNum: 503,
        count: 0,
        url:'http://img10.360buyimg.com/n1/s450x450_jfs/t1/123843/14/15990/62684/5f92b385E617a5c4d/e9902e7e9e23cfff.jpg'
      }
    ],
    isOrderListPage: true
  },
  getters:{
    getTotalCount(state) {
      let totalCount = 0;
      state.goodsList.forEach(item=> {
        totalCount += item.count
      });

      return totalCount;
    },
    getGoodsList(state) {
      return state.goodsList;
    }
  },
  mutations: {
    addGoods(state, goods){
      const oldGoods = state.goodsList.find(item => item.id == goods.id);
      oldGoods.count++;
    },

    decreaseGoods(state, goods){
      const oldGoods = state.goodsList.find(item => item.id == goods.id);
      oldGoods.count > 0 ? oldGoods.count-- : 0;
    },
    updateViewPage(state, isOrderListPage) {
      state.isOrderListPage = isOrderListPage;
    }
  },
  actions: {
    asyncAddGoods(context, goods) {
      setTimeout(() => {
        context.commit('addGoods', goods);
      });
    },
    asyncDecreaseGoods(context, goods) {
      setTimeout(() => {
        context.commit('decreaseGoods', goods);
      });
    }
  }
})

export default store