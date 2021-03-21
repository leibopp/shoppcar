// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';

Vue.use(Vuex)
Vue.config.productionTip = false

var store = new Vuex.Store({
  state: {
    isOrderListPage: true,
    totalcount: 0,
    goods: [
      {
        id: 1,
        prize: 5000,
        name: '手机',
        maxNum: 50,
        count: 1
      },          
      {
        id: 2,
        prize: 10000,
        name: '电脑',
        maxNum: 501,
        count: 0
      },
      {
        id: 3,
        prize: 120,
        name: '耳机',
        maxNum: 503,
        count: 0
      },
      {
        id: 4,
        prize: 200,
        name: '鼠标',
        maxNum: 503,
        count: 0
      },
      {
        id: 5,
        prize: 1000,
        name: '键盘',
        maxNum: 503,
        count: 0
      }
    ]
  },

  mutations: {

    updateAllShopCarCount(state, count) {
      state.totalcount = count;
    },

    updateViewPage(state, isOrderListPage) {
      state.isOrderListPage = isOrderListPage;
    },

    updateGoodCount(state, id, count) {
      state.goods.find(findSelectedId).count = count;

      function findSelectedId(selectedId){
        return selectedId = id;
      }
    },
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
