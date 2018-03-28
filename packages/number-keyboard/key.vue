<template>
  <i
    class="gl-number-keyboard__key"
    :class="className"
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
      onFocus () {
        this.className = 'gl-number-keyboard__key--focus'
        this.$emit('press', this.val)
      },

      onBlur () {
        this.className = ''
      }
    }
  }
</script>
<style lang="scss">
  @import '../styles/mixins/border.scss';
  @import '../styles/var.scss';
  .gl-number-keyboard__key {
    @include border-1px($border-color, top);
    @include border-1px($border-color, right);
    height: 50px;
    width: 33.333%;
    flex: 0 0 auto;
    text-align: center;
    font-size: 24px;
    line-height: 50px;
    color: $text-color;
  
    &--focus{
      background-color: $gray-color!important;
    }
  
    &--gray{
      background-color: $border-color;
    }
  }
</style>