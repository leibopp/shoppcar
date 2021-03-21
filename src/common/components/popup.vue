<template>
  <div class="popup-background display-in-column column-in-center column-align-center" :class="showPopup ? '' : 'hidden'">
    <div class="popup-body" :class="showPopup ? '' : 'hidden'">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['showPopup']
}
</script>


<style lang="scss" scoped>
$px: 1rem / 20;
.popup {
  &-background {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    will-change: opacity;
    transition: opacity .3s;
  }
  &-background.hidden {
    opacity: 0;
    pointer-events: none;
  }
  &-body {
    background-color: #ffffff;
    will-change: transform;
    transition: transform .3s;
    margin: 180* $px 20 * $px;
    padding: 16 * $px;
    border-radius: 4 * $px;
    &-title,
    &-sub-title {
      text-align: center;
    }
    &-sub-title {
      margin-top: 10 * $px;
      margin-bottom: 6 * $px;
    }
    &-detail {
      text-align: justify;
    }
  }
  &-body.hidden {
    transform: translateY(100%);
  }
  &-close {
    position: relative;
    margin-top: 32 * $px;
    width: 37 * $px;
    height: 37 * $px;
    border: 1 * $px solid #ffffff;
    border-radius: 50%;
    will-change: transform;
    transition: transform .3s;
  }
  &-close:before,
  &-close:after{
    position: absolute;
    content: '';
    width: 20 * $px;
    height: 1 * $px;
    background-color: #ffffff;
    transform: rotate(45deg);
    top: 50%;
    left: 50%;
    margin-left: -10 * $px;
  }
  &-close:after {
    transform: rotate(-45deg);
  }
  &-close.hidden {
    transform: translateY(100%);
  }
}
</style>