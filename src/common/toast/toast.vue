<template>
  <transition name="fade">
    <div v-show="visible" :class="position" class="toast">
      {{ msg }}
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      msg: '',
      position: ''
    };
  }
}

</script>
<style lang='scss' scoped>
  $rem: 1 / 18.75 * 1rem;
  .toast {
    position: fixed;
    max-width: 60%;
    left: 50%;
    font-size: 16*$rem;
    padding: 8*$rem 15*$rem;
    border-radius: 5*$rem;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    z-index: 1000;
    transform: translate(-50%, -50%);
    z-index: 999;
  }
  .middle {
    top: 50%;
  }
  .top {
    top: 10%;
  }
  .bottom {
    top: 90%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: transform .5s
  }
  .fade-enter, .fade-leave-active {
    transform:translate(-50%,-50%) scale(0);
  }
  .hl-toasts {
    z-index: 999;
    opacity: 0;
    position: fixed;
    bottom: 30%;
    left: 50%;
    padding: 1rem;
    max-width: 50%;
    margin-left: -50%;
    color: white;
    border-radius: 0.4rem;
    transition: opacity 1s;
    line-height: 1.4rem;
    font-size: 1rem;
    background: rgba(0,0,0,0.8);
  }

  .hl-toasts.show {
    opacity: 1;
  }
</style>