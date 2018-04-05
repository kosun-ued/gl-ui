<template>
  <gl-popup
    pos="bottom"
    class="gl-action-sheet"
    :closeByClickMask="true"
    v-model="visible">
    <p class="gl-action-sheet__title" v-if="title">{{title}}</p>
    <ul class="gl-action-sheet__actions">
      <slot></slot>
    </ul>
    <p
      v-if="showButtonCancel"
      @touchmove.prevent.stop
      @click="visible = false"
      class="gl-action-sheet__button-cancel">
      取消
    </p>
  </gl-popup>
</template>
<script>
import Popup from '../popup'

export default {
  name: 'gl-action-sheet',
  props: {
    value: Boolean,
    closeByClickMask: {
      type: Boolean,
      default: true
    },
    title: String,
    showButtonCancel: {
      type: Boolean,
      default: true
    }
  },

  components: {
    [Popup.name]: Popup
  },

  data () {
    return {
      visible: false
    }
  },

  created () {
    this.visible = this.value
  },

  watch: {
    visible () {
      this.$emit('input', this.visible)
    },

    value () {
      this.visible = this.value
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
  @import "../styles/var.scss";
  @import "../styles/mixin.scss";

  .gl-action-sheet {
    .gl-popup__content {
      padding: 0;
      text-align: center;
      background-color: transparent;
    }

    &__title {
      position: relative;
      line-height: 40px;
      background-color: #fff;
      font-size: 20px;
      @include border-1px($color-gray1, bottom);
    }

    &__actions {
      max-height: 200px;
      padding: 0 20px;
      background-color: #fff;
      overflow: scroll;
      &-item {
        position: relative;
        line-height: 40px;
        @include border-1px($color-gray1, bottom);
        &:last-child {
          @include clear-border();
        }
      }
    }

    &__button-cancel {
      line-height: 40px;
      background-color: #fff;
      margin-top: 10px;
      color: $color-gray3;
    }
  }
</style>
