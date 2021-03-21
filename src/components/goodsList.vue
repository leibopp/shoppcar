<template>
  <div class="goods-list">
    <div>{{list.prize}}</div>
    <div>{{list.name}}</div>
    <div>{{list.maxNum}}</div>
    <div>
      <button @click="add()">+</button>
      {{list.count}}    
      <button @click="decrease()">-</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object
  },

  mounted() {
    console.log(this.list,'list================');
    this.item = this.list;
  },
  
  computed: {

  },

  methods: {
    add() {
      this.$store.commit('updateGoodCount', this.item.id, ++this.item.count);
    },

    decrease() {
      this.$store.commit('updateGoodCount', this.item.id, --this.item.count);
    },

    updateAllShopCarCount() {
      const allCountValue = this.getAllShopCarCount();
      this.$store.commit('updateAllShopCarCount', allCountValue);
    }
  }
}
</script>

<style >

</style>