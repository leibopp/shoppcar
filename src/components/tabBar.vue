<template>
  <div class="tab-box">
    <div :class='{active: !!flag}' @click="tab(true)">商品列表</div>
    <div :class='{active: !flag}' @click="tab(false)">购物车<span>{{myCount}}</span></div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      flag: true
    }
  },

  computed: {
    ...mapGetters({
      myCount: 'getTotalCount'
    }),
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
      &:nth-child(2) {
        span {
          position: relative;;
          color: red;
          font-size: .5rem;
          left: .5rem;
          bottom: .5rem

        }
      }
    }
   }
</style>