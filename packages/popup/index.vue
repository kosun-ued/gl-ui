<template>
  <transition :name="transition">
    <div class="gl-popup" v-show="value">
      <div class="gl-popup__mask" :style="{'opacity': MaskOpacity}" @click.stop="hide" v-show="mask"></div>

      <!-- center popup -->
      <div v-if="pos === 'center'" class="gl-popup__center-wrapper">
        <div class="gl-popup__center-mask" @click.stop="hide"></div>
        <div class="gl-popup__content gl-popup__content--center">
          <slot></slot>
        </div>
      </div>
      <!-- others -->
      <div v-else class="gl-popup__content" :class="`gl-popup__content--${pos}`">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'gl-popup',
    props: {
      value: Boolean,
      pos: {
        type: String,
        default: 'center'
      },
      mask: {
        type: Boolean,
        default: true
      },
      closeByClickMask: {
        type: Boolean,
        default: true
      },
      transition: {
        type: String,
        default: 'gl-popup'
      },
      MaskOpacity: {
        type: Number,
        default: 0.3
      }
    },

    methods: {
      hide () {
        this.closeByClickMask && this.$emit('input', false)
      }
    }
  }
</script>
<style lang="scss">
  @import "../styles/mixin.scss";
  @import '../styles/transition.scss';

  .gl-popup {
    position: fixed;
    z-index: 2000;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    &__mask {
      position: absolute;
      height: 100%;
      width: 100%;
      background-color: #000;
    }

    // center
    &__center-wrapper, &__center-mask {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    &__center-mask {
      top: 0;
      left: 0;
    }

    &__content {
      position: absolute;
      background-color: #fff;
      padding: 10px;
      left: 0;

      &--center {
        top: 50%;
        left: 50%;
        border-radius: 5px;
        transform: translate(-50%, -50%);
      }

      &--bottom {
        width: 100%;
        bottom: 0;
      }

      &--top {
        width: 100%;
        top: 0;
      }

      &--full {
        width: 100%;
        height: 100%;
        top: 0;
      }
    }
  }
</style>
