<template>
  <div class="gl-slider-item" :style="style">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'gl-slider-item',

  data() {
    return {
      offset: 0
    };
  },

  computed: {
    style() {
      return {
        width: this.$parent.width + 'px',
        transform: `translate(${this.offset}px, 0)`
      }
    }
  },

  beforeCreate() {
    this.$parent.swipes.push(this)
  },

  destroyed() {
    this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1)
  }
}
</script>
