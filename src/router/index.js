import Vue from 'vue';
import Router from 'vue-router';
import Home from '../index.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'shoppingCard',
      component: Home
    }
  ]
})
