<template>
  <div class="shop-car-list">
    <div>{{list.price}}</div>
    <div>{{list.name}}</div>
    <div>{{list.count}}</div>
    <div><button @click="deleteItem">X</button></div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object
  },

  methods: {
    deleteItem() {
      const currentGoods = this.$store.getters.getGoodsList.find(item => item.id == this.list.id);
      currentGoods.count = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
  .shop-car-list {
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .8rem;
    > div {
      padding: 0.5rem 0.3rem;
      flex: 1;
    }
  }
</style>