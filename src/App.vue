<template>
  <div id="app">
    <div class="title">PaodingAI shopCar</div>
    <router-view/>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import tabBar from './components/tabBar.vue'
export default {
  components: { tabBar },
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100rem;
  padding-top: 20px;
}
</style>
