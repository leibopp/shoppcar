<template>
  <div class="item-list">
    <div class="item-pic">
      <img :src="list.url" alt="这里显示图片"/>
    </div>
    <div class="item-name">{{list.name}}</div>
    <div class="item-describe">这里是{{list.name}}的详情相关介绍</div>
    <div class="item-price">{{list.price}}￥</div>
    <div class="item-count-box">
      <button @click="updateGoodsCount(list, false)">-</button>
        {{list.count}}
      <button @click="updateGoodsCount(list, true)">+</button>
    </div>
  </div>
</template>
<script>

import toast from '../common/toast';

export default {
  props: {
    list: Object
  },

  mounted() {
    this.item = this.list;
  },

  methods: {
    updateGoodsCount(list, flag) {
      if (list.count === 0 && flag) {
        toast('加入购物车成功');
      }

      if (flag) {
        this.$store.dispatch('asyncAddGoods', list)
      } else {
        this.$store.dispatch('asyncDecreaseGoods', list);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @mixin textEllipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .item-list {
    border-bottom: 1px solid #ccc;
    display: flex;
    padding: 20px 1rem;
    align-items: center;
    position: relative;
    font-size: .8rem;
    .item-pic {
      flex: 1;
      padding: 1rem;
      img {
        width: 100%
      };
    }
    .item-price {
      flex: 1;
    }
    .item-describe {
      flex: 2;
      @include textEllipsis;
    }
    .item-count-box {
      flex: 2;
    }
  }
</style>