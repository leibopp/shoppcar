<template>
  <div class="tab-box">
    <div :class='{active: !!flag}' @click="tab(true)">订单</div>
    <div :class='{active: !flag}' @click="tab(false)">购物车</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: true
    }
  },
  methods: {
    tab(flag) {
      this.flag = flag;
      this.$store.commit('updateViewPage', this.flag);
    }
  }
}
</script>

<style lang="scss" scoped>
   .tab-box {
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 30px;
    margin: 0 auto;
    box-shadow: 0 0 3px #000;
    width: 100%;
    max-width: 100rem;
    bottom: 0;
    background: white;
    > div {
      text-align: center;
      flex: 1;
      font-size: .8rem;
      height: 1.6rem;
      line-height: 1.6rem;
      &.active {
        color: red;
      }
    }
   }
</style>