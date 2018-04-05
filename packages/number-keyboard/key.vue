<template>
  <i
    class="gl-number-keyboard__key"
    :class="className"
    @click.stop.prevent="emitPress"
    @touchstart.stop.prevent="onFocus"
    @touchmove="onBlur"
    @touchend="onBlur"
    @touchcancel="onBlur">
    <slot></slot>
  </i>
</template>

<script>
  export default {
    props: {
      val: [String, Number]
    },
    data () {
      return {
        className: ''
      }
    },
    methods: {
      emitPress () {
        this.$emit('press', this.val)
      },

      onFocus () {
        this.className = 'gl-number-keyboard__key--focus'
        this.emitPress()
      },

      onBlur () {
        this.className = ''
      }
    }
  }
</script>
<style lang="scss">
  @import "../styles/var.scss";
  @import "../styles/mixin.scss";

  .gl-number-keyboard__key {
    position: relative;
    @include border-1px($color-gray1, top right);
    height: 50px;
    width: 33.333%;
    flex: 0 0 auto;
    text-align: center;
    font-size: 24px;
    line-height: 50px;
    color: $color-primary;

    &--focus {
      background-color: $color-gray2 !important;
    }

    &--gray {
      background-color: $color-gray1;
    }
  }
</style>
