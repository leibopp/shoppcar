<template>
  <div class="shop-car-list">
    <div>{{list.prize}}</div>
    <div>{{list.name}}</div>
    <div>{{list.maxNum}}</div>
    <div>{{list.count}}</div>
  </div>
</template>

<script>
export default {
  props: {
    list: Object
  },
  mounted() {
    this.item = this.list;
  },
}
</script>

<style>

</style>